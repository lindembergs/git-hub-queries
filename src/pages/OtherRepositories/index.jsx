import { Input } from "../../components/Input";
import { MainContainer } from "../../components/MainContainer/style";
import { Repositories } from "../../components/Repositories";

export const OtherRepositories = () => {
  return (
    <MainContainer>
      <h2>Outros repositórios</h2>
      <Input placeholder="Pesquise por repositórios"></Input>
      <Repositories></Repositories>
    </MainContainer>
  );
};
