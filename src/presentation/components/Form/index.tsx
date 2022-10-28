import { Form as Default } from "./Form";
import { FormButton } from "./Button";

import { IForm } from "./types";

export const Form: IForm = (props) => <Default {...props} />;

Form.Button = FormButton;
