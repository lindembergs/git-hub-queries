import * as S from "./styles";
import logo from "../../assets/img/github-img.png";
import gitIcon from "../../assets/img/logo-git.png";
import { Link } from "react-router-dom";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export const Login = () => {
  const handleGitHubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // Redirecionar ou tratar o usuário logado conforme necessário
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo do git hub" />
        <h1>Sign in</h1>
        <form action="">
          <S.Input placeholder="E-mail" />
          <S.Input placeholder="Senha" type="password" />
          <Link to="/meusrepositórios">
            <S.Button bn="none" color="white" bg="black" type="submit">
              Entrar
            </S.Button>
          </Link>
          <span>ou</span>
          <S.Button onClick={handleGitHubLogin} bg="white" type="button">
            <img src={gitIcon} alt="Github logo" /> Continuar com Github
          </S.Button>
        </form>
      </S.Content>
    </S.Container>
  );
};
