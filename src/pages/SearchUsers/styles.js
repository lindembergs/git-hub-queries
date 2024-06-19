import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  background-color: black;
  border-radius: 6px;
  padding: 25px 20px;
  margin-bottom: 15px;
  p {
    color: white;
  }
  span {
    color: grey;
  }
  button {
    height: 30px;
    width: 110px;
    color: white;
    background-color: #282729;
    border: none;
    border-radius: 4px;
  }
`;
export const Info = styled.div`
  display: flex;
  gap: 5px;
  color: grey;
  figure {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  figure svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;
