import { MainContainer } from "../../components/MainContainer/style";
import { Input } from "../../components/Input";
import { Repositories } from "../../components/Repositories";
export const MyRepositories = () => {
  return (
    <>
      <MainContainer>
        <h2>Meus repositórios</h2>
        <Input></Input>
        <Repositories></Repositories>
      </MainContainer>
    </>
  );
};
