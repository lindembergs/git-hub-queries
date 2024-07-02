import { MainContainer } from "../../components/MainContainer/style";
import { Content } from "./style";
import { Button } from "../Login/styles";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <MainContainer>
      <Content>
        <h1>Erro 404 página não encontrada</h1>
        <Link to="/home">
          <Button $bn="nome" $color="white" $bg="blue">
            Voltar a tela inicial
          </Button>
        </Link>
      </Content>
    </MainContainer>
  );
};
