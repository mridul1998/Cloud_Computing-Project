from __future__ import print_function
import os
import io
import boto3
import json
import csv
import time


# grab environment variables
ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
runtime= boto3.client('runtime.sagemaker')

def lambda_handler(event, context):
    # TODO implement
    print("Received event: " + json.dumps(event, indent=2))
    
    data = json.loads(json.dumps(event))
    payload = data['data']
    print(payload)
    
    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME,ContentType='text/csv',Body=payload)
    
    print(response)
    
    result = json.loads(response['Body'].read().decode())
    print(result)
    
    pred = int(result['predictions'][0]['score'])
    predicted_label = 'acquired' if pred == 1 else 'closed'
    
    arn = "arn:aws:sns:us-east-2:843351136705:CC_project_logistic"
    email = data['email']

    message = {"Status": predicted_label}
    client = boto3.client('sns')
    
    subscribe_response = client.subscribe(TopicArn=arn,Protocol='email',Endpoint=email,ReturnSubscriptionArn=True)
    
    time.sleep(120)
    response = client.publish(TargetArn=arn,Message=json.dumps({'default': json.dumps(message)}),MessageStructure='json')
    
    return message
