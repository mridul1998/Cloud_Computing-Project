/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
export default function StartupPrediction(props) {
  const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } =
    props;
  const initialValues = {
    Field0: undefined,
    Field1: undefined,
    Field2: undefined,
    Field3: undefined,
    Field4: undefined,
    Field5: undefined,
    Field6: undefined,
    Field7: undefined,
    Field8: undefined,
    Field9: undefined,
    Field10: false,
    Field11: false,
    Field12: false,
    Field13: false,
    Field14: false,
    Field15: false,
    Field16: undefined,
    Field17: false,
    Field18: undefined,
  };
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [Field2, setField2] = React.useState(initialValues.Field2);
  const [Field3, setField3] = React.useState(initialValues.Field3);
  const [Field4, setField4] = React.useState(initialValues.Field4);
  const [Field5, setField5] = React.useState(initialValues.Field5);
  const [Field6, setField6] = React.useState(initialValues.Field6);
  const [Field7, setField7] = React.useState(initialValues.Field7);
  const [Field8, setField8] = React.useState(initialValues.Field8);
  const [Field9, setField9] = React.useState(initialValues.Field9);
  const [Field10, setField10] = React.useState(initialValues.Field10);
  const [Field11, setField11] = React.useState(initialValues.Field11);
  const [Field12, setField12] = React.useState(initialValues.Field12);
  const [Field13, setField13] = React.useState(initialValues.Field13);
  const [Field14, setField14] = React.useState(initialValues.Field14);
  const [Field15, setField15] = React.useState(initialValues.Field15);
  const [Field16, setField16] = React.useState(initialValues.Field16);
  const [Field17, setField17] = React.useState(initialValues.Field17);
  const [Field18, setField18] = React.useState(initialValues.Field18);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setField0(initialValues.Field0);
    setField1(initialValues.Field1);
    setField2(initialValues.Field2);
    setField3(initialValues.Field3);
    setField4(initialValues.Field4);
    setField5(initialValues.Field5);
    setField6(initialValues.Field6);
    setField7(initialValues.Field7);
    setField8(initialValues.Field8);
    setField9(initialValues.Field9);
    setField10(initialValues.Field10);
    setField11(initialValues.Field11);
    setField12(initialValues.Field12);
    setField13(initialValues.Field13);
    setField14(initialValues.Field14);
    setField15(initialValues.Field15);
    setField16(initialValues.Field16);
    setField17(initialValues.Field17);
    setField18(initialValues.Field18);
    setErrors({});
  };
  const validations = {
    Field0: [{ type: "Required" }],
    Field1: [{ type: "Required" }],
    Field2: [{ type: "Required" }],
    Field3: [{ type: "Required" }],
    Field4: [{ type: "Required" }],
    Field5: [{ type: "Required" }],
    Field6: [{ type: "Required" }],
    Field7: [{ type: "Required" }],
    Field8: [],
    Field9: [],
    Field10: [],
    Field11: [],
    Field12: [],
    Field13: [],
    Field14: [],
    Field15: [],
    Field16: [{ type: "Required" }],
    Field17: [],
    Field18: [{ type: "Required" }, { type: "Email" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Field0,
          Field1,
          Field2,
          Field3,
          Field4,
          Field5,
          Field6,
          Field7,
          Field8,
          Field9,
          Field10,
          Field11,
          Field12,
          Field13,
          Field14,
          Field15,
          Field16,
          Field17,
          Field18,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...rest}
      {...getOverrideProps(overrides, "StartupPrediction")}
    >
      <TextField
        label="First Funding Year"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0: value,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></TextField>
      <TextField
        label="Last Funding Year"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1: value,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        {...getOverrideProps(overrides, "Field1")}
      ></TextField>
      <TextField
        label="First Milestone Year"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2: value,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field2 ?? value;
          }
          if (errors.Field2?.hasError) {
            runValidationTasks("Field2", value);
          }
          setField2(value);
        }}
        onBlur={() => runValidationTasks("Field2", Field2)}
        errorMessage={errors.Field2?.errorMessage}
        hasError={errors.Field2?.hasError}
        {...getOverrideProps(overrides, "Field2")}
      ></TextField>
      <TextField
        label="Last Milestone Year"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3: value,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field3 ?? value;
          }
          if (errors.Field3?.hasError) {
            runValidationTasks("Field3", value);
          }
          setField3(value);
        }}
        onBlur={() => runValidationTasks("Field3", Field3)}
        errorMessage={errors.Field3?.errorMessage}
        hasError={errors.Field3?.hasError}
        {...getOverrideProps(overrides, "Field3")}
      ></TextField>
      <TextField
        label="Relationships"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4: value,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field4 ?? value;
          }
          if (errors.Field4?.hasError) {
            runValidationTasks("Field4", value);
          }
          setField4(value);
        }}
        onBlur={() => runValidationTasks("Field4", Field4)}
        errorMessage={errors.Field4?.errorMessage}
        hasError={errors.Field4?.hasError}
        {...getOverrideProps(overrides, "Field4")}
      ></TextField>
      <TextField
        label="Funding Rounds"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5: value,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field5 ?? value;
          }
          if (errors.Field5?.hasError) {
            runValidationTasks("Field5", value);
          }
          setField5(value);
        }}
        onBlur={() => runValidationTasks("Field5", Field5)}
        errorMessage={errors.Field5?.errorMessage}
        hasError={errors.Field5?.hasError}
        {...getOverrideProps(overrides, "Field5")}
      ></TextField>
      <TextField
        label="Total Funding"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6: value,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field6 ?? value;
          }
          if (errors.Field6?.hasError) {
            runValidationTasks("Field6", value);
          }
          setField6(value);
        }}
        onBlur={() => runValidationTasks("Field6", Field6)}
        errorMessage={errors.Field6?.errorMessage}
        hasError={errors.Field6?.hasError}
        {...getOverrideProps(overrides, "Field6")}
      ></TextField>
      <TextField
        label="Milestones"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7: value,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field7 ?? value;
          }
          if (errors.Field7?.hasError) {
            runValidationTasks("Field7", value);
          }
          setField7(value);
        }}
        onBlur={() => runValidationTasks("Field7", Field7)}
        errorMessage={errors.Field7?.errorMessage}
        hasError={errors.Field7?.hasError}
        {...getOverrideProps(overrides, "Field7")}
      ></TextField>
      <SelectField
        label="Location"
        placeholder="Please select an option"
        value={Field8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8: value,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field8 ?? value;
          }
          if (errors.Field8?.hasError) {
            runValidationTasks("Field8", value);
          }
          setField8(value);
        }}
        onBlur={() => runValidationTasks("Field8", Field8)}
        errorMessage={errors.Field8?.errorMessage}
        hasError={errors.Field8?.hasError}
        {...getOverrideProps(overrides, "Field8")}
      >
        <option
          children="CA"
          value="CA"
          {...getOverrideProps(overrides, "Field8option0")}
        ></option>
        <option
          children="NY"
          value="NY"
          {...getOverrideProps(overrides, "Field8option1")}
        ></option>
        <option
          children="MA"
          value="MA"
          {...getOverrideProps(overrides, "Field8option2")}
        ></option>
        <option
          children="TX"
          value="TX"
          {...getOverrideProps(overrides, "Field8option3")}
        ></option>
        <option
          children="Other State"
          value="Other State"
          {...getOverrideProps(overrides, "Field8option4")}
        ></option>
      </SelectField>
      <SelectField
        label="Category"
        placeholder="Please select an option"
        value={Field9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9: value,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field9 ?? value;
          }
          if (errors.Field9?.hasError) {
            runValidationTasks("Field9", value);
          }
          setField9(value);
        }}
        onBlur={() => runValidationTasks("Field9", Field9)}
        errorMessage={errors.Field9?.errorMessage}
        hasError={errors.Field9?.hasError}
        {...getOverrideProps(overrides, "Field9")}
      >
        <option
          children="Software"
          value="Software"
          {...getOverrideProps(overrides, "Field9option0")}
        ></option>
        <option
          children="Web"
          value="Web"
          {...getOverrideProps(overrides, "Field9option1")}
        ></option>
        <option
          children="Mobile "
          value="Mobile "
          {...getOverrideProps(overrides, "Field9option2")}
        ></option>
        <option
          children="Enterprise"
          value="Enterprise"
          {...getOverrideProps(overrides, "Field9option3")}
        ></option>
        <option
          children="Advertising"
          value="Advertising"
          {...getOverrideProps(overrides, "Field9option4")}
        ></option>
        <option
          children="Games Video"
          value="Games Video"
          {...getOverrideProps(overrides, "Field9option5")}
        ></option>
        <option
          children="E-Commerce"
          value="E-Commerce"
          {...getOverrideProps(overrides, "Field9option6")}
        ></option>
        <option
          children="BioTech"
          value="BioTech"
          {...getOverrideProps(overrides, "Field9option7")}
        ></option>
        <option
          children="Consulting"
          value="Consulting"
          {...getOverrideProps(overrides, "Field9option8")}
        ></option>
        <option
          children="Other Category"
          value="Other Category"
          {...getOverrideProps(overrides, "Field9option9")}
        ></option>
      </SelectField>
      <SwitchField
        label="Venture Capitalist"
        defaultChecked={false}
        isChecked={Field10}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10: value,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field10 ?? value;
          }
          if (errors.Field10?.hasError) {
            runValidationTasks("Field10", value);
          }
          setField10(value);
        }}
        onBlur={() => runValidationTasks("Field10", Field10)}
        errorMessage={errors.Field10?.errorMessage}
        hasError={errors.Field10?.hasError}
        {...getOverrideProps(overrides, "Field10")}
      ></SwitchField>
      <SwitchField
        label="Angel Investor"
        defaultChecked={false}
        isChecked={Field11}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11: value,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field11 ?? value;
          }
          if (errors.Field11?.hasError) {
            runValidationTasks("Field11", value);
          }
          setField11(value);
        }}
        onBlur={() => runValidationTasks("Field11", Field11)}
        errorMessage={errors.Field11?.errorMessage}
        hasError={errors.Field11?.hasError}
        {...getOverrideProps(overrides, "Field11")}
      ></SwitchField>
      <SwitchField
        label="Round A"
        defaultChecked={false}
        isChecked={Field12}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12: value,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field12 ?? value;
          }
          if (errors.Field12?.hasError) {
            runValidationTasks("Field12", value);
          }
          setField12(value);
        }}
        onBlur={() => runValidationTasks("Field12", Field12)}
        errorMessage={errors.Field12?.errorMessage}
        hasError={errors.Field12?.hasError}
        {...getOverrideProps(overrides, "Field12")}
      ></SwitchField>
      <SwitchField
        label="Round B"
        defaultChecked={false}
        isChecked={Field13}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13: value,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field13 ?? value;
          }
          if (errors.Field13?.hasError) {
            runValidationTasks("Field13", value);
          }
          setField13(value);
        }}
        onBlur={() => runValidationTasks("Field13", Field13)}
        errorMessage={errors.Field13?.errorMessage}
        hasError={errors.Field13?.hasError}
        {...getOverrideProps(overrides, "Field13")}
      ></SwitchField>
      <SwitchField
        label="Round C"
        defaultChecked={false}
        isChecked={Field14}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14: value,
              Field15,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field14 ?? value;
          }
          if (errors.Field14?.hasError) {
            runValidationTasks("Field14", value);
          }
          setField14(value);
        }}
        onBlur={() => runValidationTasks("Field14", Field14)}
        errorMessage={errors.Field14?.errorMessage}
        hasError={errors.Field14?.hasError}
        {...getOverrideProps(overrides, "Field14")}
      ></SwitchField>
      <SwitchField
        label="Round D"
        defaultChecked={false}
        isChecked={Field15}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15: value,
              Field16,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field15 ?? value;
          }
          if (errors.Field15?.hasError) {
            runValidationTasks("Field15", value);
          }
          setField15(value);
        }}
        onBlur={() => runValidationTasks("Field15", Field15)}
        errorMessage={errors.Field15?.errorMessage}
        hasError={errors.Field15?.hasError}
        {...getOverrideProps(overrides, "Field15")}
      ></SwitchField>
      <TextField
        label="Average Participants"
        isRequired={true}
        type="number"
        step="any"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16: value,
              Field17,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field16 ?? value;
          }
          if (errors.Field16?.hasError) {
            runValidationTasks("Field16", value);
          }
          setField16(value);
        }}
        onBlur={() => runValidationTasks("Field16", Field16)}
        errorMessage={errors.Field16?.errorMessage}
        hasError={errors.Field16?.hasError}
        {...getOverrideProps(overrides, "Field16")}
      ></TextField>
      <SwitchField
        label="Top 500"
        defaultChecked={false}
        isChecked={Field17}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17: value,
              Field18,
            };
            const result = onChange(modelFields);
            value = result?.Field17 ?? value;
          }
          if (errors.Field17?.hasError) {
            runValidationTasks("Field17", value);
          }
          setField17(value);
        }}
        onBlur={() => runValidationTasks("Field17", Field17)}
        errorMessage={errors.Field17?.errorMessage}
        hasError={errors.Field17?.hasError}
        {...getOverrideProps(overrides, "Field17")}
      ></SwitchField>
      <TextField
        label="Email"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field12,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18: value,
            };
            const result = onChange(modelFields);
            value = result?.Field18 ?? value;
          }
          if (errors.Field18?.hasError) {
            runValidationTasks("Field18", value);
          }
          setField18(value);
        }}
        onBlur={() => runValidationTasks("Field18", Field18)}
        errorMessage={errors.Field18?.errorMessage}
        hasError={errors.Field18?.hasError}
        {...getOverrideProps(overrides, "Field18")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
