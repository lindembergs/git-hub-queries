import * as S from "./styles";
import {
  FaTimes,
  FaArchive,
  FaUser,
  FaSistrix,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../../assets/img/github-img.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/Usercontext";
import { useContext, useEffect } from "react";

export const Aside = ({ active }) => {
  const { isLogged, setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const closeSidebar = () => {
    active(false);
  };

  const logout = () => {
    setIsLogged(false);
    sessionStorage.setItem("@isLogged", JSON.stringify(false));
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  return (
    <S.Container sidebar={true}>
      <FaTimes onClick={closeSidebar} />
      <S.Content>
        <img src={logo} alt="logo do Git Hub" />
        <S.PageOptions>
          <div>
            <FaArchive />
            <Link to="/home">
              <span onClick={closeSidebar}>Meus repositórios</span>
            </Link>
          </div>
        </S.PageOptions>
        <S.PageOptions>
          <div>
            <FaSistrix />
            <Link to="/outrosrepositórios">
              <span onClick={closeSidebar}>Outros repositórios</span>
            </Link>
          </div>
        </S.PageOptions>
        <S.PageOptions>
          <div>
            <FaUser />
            <Link to="/buscarusuários">
              <span onClick={closeSidebar}>Buscar usuários</span>
            </Link>
          </div>
        </S.PageOptions>
        <S.Logout>
          <div>
            <button onClick={logout}>
              <FaSignOutAlt />
              <span>SAIR</span>
            </button>
          </div>
        </S.Logout>
      </S.Content>
    </S.Container>
  );
};
