import { useState } from "react";
import { MainContainer } from "../../components/MainContainer/style";
import { FaBars } from "react-icons/fa";
import { Aside } from "../../components/Aside";
import gitIcon from "../../assets/img/logo-git.png";
import { Input } from "../../components/Input";
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
      <MainContainer>
        <h2>Meus repositórios</h2>
        <Input></Input>
      </MainContainer>
    </>
  );
};