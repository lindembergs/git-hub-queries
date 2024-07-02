import styled from "styled-components";

export const InputContainer = styled.div`
  width: 60vw;
  height: 40px;
  margin: 0 auto;
  display: flex;
  margin-block: 40px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 35px;
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  svg {
    color: white;
    font-size: 16px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-inline: 15px;
`;
