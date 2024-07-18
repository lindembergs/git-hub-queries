import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
  h1 {
    margin-right: 252px;
    font-size: 19px;
  }
  img {
    width: 330px;
    height: 120px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  span {
    text-align: center;
  }
  button img {
    height: 20px;
    width: 30px;
  }
`;

export const Input = styled.input`
  width: 320px;
  height: 40px;
  border: 2px solid #5b5b5b;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.$bg || "unset"};
  color: ${(props) => props.$color || "unset"};
  height: 45px;
  border-radius: 8px;
  border: ${(props) => props.bn || "2px solid black"};
  font-size: ${(props) => props.fs || "15px"};
  font-weight: 500;
  width: ${(props) => props.w || "100%"};
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
