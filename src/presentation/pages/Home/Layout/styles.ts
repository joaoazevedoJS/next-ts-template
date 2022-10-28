import styled from "styled-components";
import { variables } from "@/presentation/styles/variables";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  max-width: ${variables.maxWidth};
  margin: 0 auto;
`;
