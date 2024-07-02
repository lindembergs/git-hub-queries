import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Aside } from "../../components/Aside";
import * as S from "./styles";
import { UserContext } from "./../../contexts/Usercontext";
import user from "../icons/user.png"; // Certifique-se de que o caminho para a imagem está correto

export const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  const { userData } = useContext(UserContext);
  const showSiderbar = () => setSidebar(!sidebar);

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
