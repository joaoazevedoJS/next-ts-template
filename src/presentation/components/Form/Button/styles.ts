import styled from "styled-components";

import { variables } from "@/presentation/styles/variables";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 0.0625rem solid ${variables.colors.dark_400};
  border-radius: 0.25rem;
  padding: 0.25rem 2rem;
`;

export const ButtonLoading = styled.div`
  display: flex;
  margin-left: 0.5rem;
`;
