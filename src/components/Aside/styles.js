import styled from "styled-components";

export const Container = styled.div`
  background-color: #222222;
  position: fixed;
  height: 100%;
  padding-left: 20px;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  img {
    height: 55px;
    width: 220px;
    margin-left: -13px;
    margin-bottom: 40px;
  }
`;
export const PageOptions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 8px;
  svg {
    color: white;
    font-size: 20px;
  }
  span {
    color: #fff;
  }
`;

export const Logout = styled.div`
  height: 400px;
  display: flex;
  padding-left: 10px;
  align-items: flex-end;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    color: #fff;
  }
  svg {
    font-size: 20px;
  }
  span {
    font-size: 16px;
  }
`;
