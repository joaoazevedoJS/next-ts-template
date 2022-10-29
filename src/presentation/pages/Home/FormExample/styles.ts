import styled from "styled-components";

import { Form as FormComponent } from "@/presentation/components";

export const Form = styled(FormComponent)`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  input + input {
    margin-top: 1rem;
  }
  button {
    margin-top: 1.5rem;
  }
`;
