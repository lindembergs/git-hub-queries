import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Aside } from "../../components/Aside";
import * as S from "./styles";
import { UserContext } from "./../../contexts/Usercontext";
import user from "../icons/user.png";

export const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  const { userData } = useContext(UserContext);
  const showSiderbar = () => setSidebar(!sidebar);
  useEffect(() => {
    showSiderbar();
  });

  return (
    <>
      <S.Header>
        <FaBars onClick={showSiderbar} />
        {sidebar && <Aside active={setSidebar} />}
      </S.Header>
      <S.UserNameAndImg>
        {userData && userData.displayName && userData.photoURL ? (
          <>
            <span>{userData.displayName}</span>
            <img src={userData.photoURL} alt="imagem do usuário" />
          </>
        ) : (
          <>
            <span>Nome do usuário</span>
            <img src={user} alt="imagem do usuário" />
          </>
        )}
      </S.UserNameAndImg>
    </>
  );
};
