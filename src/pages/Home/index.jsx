import { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import { Aside } from "../../components/Aside";

export const Home = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Aside active={setSidebar} />}
    </Container>
  );
};
