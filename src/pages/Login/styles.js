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
    margin-right: 235px;
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
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  button img {
    height: 20px;
    width: 20px;
  }
`;

export const Input = styled.input`
  width: 320px;
  height: 50px;
`;
