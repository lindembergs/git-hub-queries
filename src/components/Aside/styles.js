import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
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
  padding-left: 8px;
  svg {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  span {
    color: #fff;
    cursor: pointer;
  }
  div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  div:hover {
    border-bottom: 2px solid blue;
    width: fit-content;
    color: blue;
    margin-left: 15px;
    transition: all 0.3s ease-in-out;
    span,
    svg {
      color: #377cd0;
    }
  }
`;

export const Logout = styled.div`
  height: 400px;
  display: flex;
  padding-left: 10px;
  align-items: flex-end;
  button {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 4px;
  }
  svg {
    font-size: 20px;
    color: black;
  }
  span {
    font-size: 15px;
    color: #fff;
  }
`;
Container.shouldForwardProp = (prop) => prop !== "sidebar";
