import styled from "styled-components";

export const Header = styled.header`
  height: 100px;
  display: flex;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const UserNameAndImg = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  margin-top: -65px;
  padding-right: 2%;
  span {
    font-size: 15px;
    font-weight: 500;
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
