import * as S from "./styles";
import logo from "../../assets/img/github-img.png";
import gitIcon from "../../assets/img/logo-git.png";

export const Login = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo do git hub" />
        <h1>Sign in</h1>
        <form action="">
          <S.Input></S.Input>
          <S.Input></S.Input>
          <button type="submit">Entrar</button>
          <span>ou</span>
          <button>
            <img src={gitIcon} alt="" /> Continuar com Github
          </button>
        </form>
      </S.Content>
    </S.Container>
  );
};
