import * as S from "./styles";
import logo from "../../assets/img/github-img.png";
import gitIcon from "../../assets/img/logo-git.png";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo do git hub" />
        <h1>Sign in</h1>
        <form action="">
          <S.Input placeholder="E-mail"></S.Input>
          <S.Input placeholder="Senha"></S.Input>
          <Link to="/home">
            <S.Button bn="none" color="white" bg="black" type="submit">
              Entrar
            </S.Button>
          </Link>
          <span>ou</span>
          <S.Button bg="white" type="button">
            <img src={gitIcon} alt="" /> Continuar com Github
          </S.Button>
        </form>
      </S.Content>
    </S.Container>
  );
};
