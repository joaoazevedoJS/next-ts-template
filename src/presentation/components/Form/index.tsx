import { Form as Default } from "./Form";
import { FormButton } from "./Button";
import { FormInput } from "./Input";

import { IForm } from "./types";

export const Form: IForm = (props) => <Default {...props} />;

Form.Button = FormButton;
Form.Input = FormInput;
