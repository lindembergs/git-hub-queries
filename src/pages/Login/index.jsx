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
          <S.Button type="submit">Entrar</S.Button>
          <span>ou</span>
          <S.Button>
            <img src={gitIcon} alt="" /> Continuar com Github
          </S.Button>
        </form>
      </S.Content>
    </S.Container>
  );
};
