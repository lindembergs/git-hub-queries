import * as S from "./styles";
import logo from "../../assets/img/github-img.png";

export const Login = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo do git hub" />
      </S.Content>
    </S.Container>
  );
};
