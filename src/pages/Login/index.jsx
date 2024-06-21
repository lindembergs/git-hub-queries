import * as S from "./styles";
import logo from "../../assets/img/github-img.png";
import gitIcon from "../../assets/img/logo-git.png";
import { Link, useNavigate } from "react-router-dom";
import { authWithGitHub } from "../../services/auth";

export const Login = () => {
  const navigate = useNavigate();
  const handleAuth = async () => {
    try {
      const user = await authWithGitHub();
      if (user) {
        navigate("/meusrepositórios");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo do git hub" />
        <h1>Sign in</h1>
        <form action="">
          <S.Input
            placeholder="E-mail"
            type="email"
            autoComplete="email"
            required
          />
          <S.Input
            placeholder="Senha"
            type="password"
            autoComplete="current-password"
            required
          />
          <Link to="/meusrepositórios">
            <S.Button $bn="none" $color="white" $bg="black" type="submit">
              Entrar
            </S.Button>
          </Link>
          <span>ou</span>
          <S.Button onClick={handleAuth} $bg="white" type="button">
            <img src={gitIcon} alt="Github logo" /> Continuar com Github
          </S.Button>
        </form>
      </S.Content>
    </S.Container>
  );
};
