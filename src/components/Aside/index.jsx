import { Container, Content } from "./styles";
import { FaTimes } from "react-icons/fa";

export const Aside = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content></Content>
    </Container>
  );
};
