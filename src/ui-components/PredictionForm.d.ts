/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PredictionFormInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
    Field3?: string;
    Field4?: string;
    Field5?: string;
    Field6?: string;
    Field7?: string;
    Field8?: string;
    Field9?: string;
    Field10?: boolean;
    Field11?: boolean;
    Field12?: boolean;
    Field13?: boolean;
    Field14?: boolean;
    Field15?: boolean;
    Field16?: string;
    Field17?: boolean;
    Field18?: string;
};
export declare type PredictionFormValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
    Field4?: ValidationFunction<string>;
    Field5?: ValidationFunction<string>;
    Field6?: ValidationFunction<string>;
    Field7?: ValidationFunction<string>;
    Field8?: ValidationFunction<string>;
    Field9?: ValidationFunction<string>;
    Field10?: ValidationFunction<boolean>;
    Field11?: ValidationFunction<boolean>;
    Field12?: ValidationFunction<boolean>;
    Field13?: ValidationFunction<boolean>;
    Field14?: ValidationFunction<boolean>;
    Field15?: ValidationFunction<boolean>;
    Field16?: ValidationFunction<string>;
    Field17?: ValidationFunction<boolean>;
    Field18?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PredictionFormOverridesProps = {
    PredictionFormGrid?: FormProps<GridProps>;
    Field0?: FormProps<TextFieldProps>;
    Field1?: FormProps<TextFieldProps>;
    Field2?: FormProps<TextFieldProps>;
    Field3?: FormProps<TextFieldProps>;
    Field4?: FormProps<TextFieldProps>;
    Field5?: FormProps<TextFieldProps>;
    Field6?: FormProps<TextFieldProps>;
    Field7?: FormProps<TextFieldProps>;
    Field8?: FormProps<SelectFieldProps>;
    Field9?: FormProps<SelectFieldProps>;
    Field10?: FormProps<SwitchFieldProps>;
    Field11?: FormProps<SwitchFieldProps>;
    Field12?: FormProps<SwitchFieldProps>;
    Field13?: FormProps<SwitchFieldProps>;
    Field14?: FormProps<SwitchFieldProps>;
    Field15?: FormProps<SwitchFieldProps>;
    Field16?: FormProps<TextFieldProps>;
    Field17?: FormProps<SwitchFieldProps>;
    Field18?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PredictionFormProps = React.PropsWithChildren<{
    overrides?: PredictionFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: PredictionFormInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: PredictionFormInputValues) => PredictionFormInputValues;
    onValidate?: PredictionFormValidationValues;
} & React.CSSProperties>;
export default function PredictionForm(props: PredictionFormProps): React.ReactElement;
