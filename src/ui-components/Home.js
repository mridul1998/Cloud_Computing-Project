import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Home.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, API } from "aws-amplify";
import axios from "axios";
import Header from "./Header";
import StartupPrediction from "./PredictionForm";

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "DEMO-linear-endpoint-202211280003",
        endpoint: "https://fvtenk5mii.execute-api.us-east-2.amazonaws.com",
      },
    ],
  },
});

function CallsToAPI(feilds) {
  let str = "";
  let email = "";
  const myJSON = JSON.stringify(feilds);
  let n = myJSON.length - 1;
  let newJSON = myJSON.substring(1, n);
  const peices = newJSON.split(",");
  peices.forEach((element) => {
    var eachPeice = element.split(":");
    if (eachPeice[1].includes("CA")) {
      str = str.concat("1,0,0,0,0,");
    } else if (eachPeice[1].includes("NY")) {
      str = str.concat("0,1,0,0,0,");
    } else if (eachPeice[1].includes("MA")) {
      str = str.concat("0,0,1,0,0,");
    } else if (eachPeice[1].includes("TX")) {
      str = str.concat("0,0,0,1,0,");
    } else if (eachPeice[1].includes("otherstate")) {
      str = str.concat("0,0,0,0,1,");
    } else if (eachPeice[1].includes("Software")) {
      str = str.concat("1,0,0,0,0,0,0,0,0,0,");
    } else if (eachPeice[1].includes("Web")) {
      str = str.concat("0,1,0,0,0,0,0,0,0,0,");
    } else if (eachPeice[1].includes("Mobile")) {
      str = str.concat("0,0,1,0,0,0,0,0,0,0,");
    } else if (eachPeice[1].includes("Enterprise")) {
      str = str.concat("0,0,0,1,0,0,0,0,0,0,");
    } else if (eachPeice[1].includes("Advertising")) {
      str = str.concat("0,0,0,0,1,0,0,0,0,0,");
    } else if (eachPeice[1].includes("GamesVideo")) {
      str = str.concat("0,0,0,0,0,1,0,0,0,0,");
    } else if (eachPeice[1].includes("Commerce")) {
      str = str.concat("0,0,0,0,0,0,1,0,0,0,");
    } else if (eachPeice[1].includes("Biotech")) {
      str = str.concat("0,0,0,0,0,0,0,1,0,0,");
    } else if (eachPeice[1].includes("Constlting")) {
      str = str.concat("0,0,0,0,0,0,0,0,1,0,");
    } else if (eachPeice[1].includes("Other Category")) {
      str = str.concat("0,0,0,0,0,0,0,0,0,1,");
    } else if (eachPeice[1].includes(false)) {
      str = str.concat("0,");
    } else if (eachPeice[1].includes(true)) {
      str = str.concat("1,");
    } else if (eachPeice[1].includes("@")) {
      email = eachPeice[1].replaceAll('"', "");
      console.log(email);
    } else {
      var ss = eachPeice[1].replaceAll('"', "");
      str = str.concat(ss + ",");
    }
  });
  str = str.substring(0, str.length - 1);
  let obj1 = { data: str, email: email };
  console.log(obj1);
  const jobj = JSON.stringify(obj1);
  console.log(jobj);
  const api =
    "https://fvtenk5mii.execute-api.us-east-2.amazonaws.com/logistictest/logisticstartuppredictor";
  axios
    .post(api, jobj)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="vertical-center">
            <StartupPrediction
              onSubmit={(feilds) => {
                CallsToAPI(feilds);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
