import styled from "styled-components";
import NotFound from "../../assets/img/notfound-image.svg";

export const Content = styled.div`
  min-height: 91vh;
  min-width: 102%;
  background-image: url(${NotFound});
  button {
    width: 200px;
  }
`;
