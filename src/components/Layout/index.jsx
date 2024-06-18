import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Aside } from "../../components/Aside";
import gitIcon from "../../assets/img/logo-git.png";
import * as S from "./styles";
export const Layout = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <>
      <S.Header>
        <FaBars onClick={showSiderbar} />
        {sidebar && <Aside active={setSidebar} />}
      </S.Header>
      <S.UserNameAndImg>
        <span>Lindemberg Silva</span>
        <img src={gitIcon} alt="imagem do usuário" />
      </S.UserNameAndImg>
    </>
  );
};
