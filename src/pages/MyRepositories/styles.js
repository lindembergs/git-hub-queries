import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const AncorDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    border: 1px solid grey;
    color: grey;
    border-radius: 20px;
    font-size: 10px;
    padding: 0px 5px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: grey;
`;
