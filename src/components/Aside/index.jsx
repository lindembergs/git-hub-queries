import * as S from "./styles";
import { FaTimes } from "react-icons/fa";
import { FaArchive, FaUser, FaSistrix, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/img/github-img.svg";
import { Link } from "react-router-dom";
export const Aside = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <S.Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <S.Content>
        <img src={logo} alt="logo do Git Hub" />
        <S.PageOptions>
          <FaArchive></FaArchive>
          <span>Meus repositórios</span>
        </S.PageOptions>
        <S.PageOptions>
          <FaSistrix />
          <Link to="/outrosrepositórios">
            <span>Outros repositórios</span>
          </Link>
        </S.PageOptions>
        <S.PageOptions>
          <FaUser />
          <span>Buscar usuários</span>
        </S.PageOptions>
        <S.Logout>
          <div>
            <FaSignOutAlt></FaSignOutAlt>
            <span>SAIR</span>
          </div>
        </S.Logout>
      </S.Content>
    </S.Container>
  );
};
