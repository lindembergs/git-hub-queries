import * as S from "./styles";
import { Input } from "../../components/Input";
import { MainContainer } from "./../../components/MainContainer/style";
import { UserImg } from "../../components/icons/User";
import { FaArchive, FaUser } from "react-icons/fa";
export const SearchUsers = () => {
  return (
    <MainContainer>
      <h2>Buscar usuários</h2>
      <Input placeholder="Buscar usuários"></Input>
      <S.Container>
        <S.Info>
          <figure>
            <UserImg></UserImg>
          </figure>
          <div>
            <p>Lindemberg</p>
            <S.Items>
              <div>
                <FaArchive></FaArchive>
                <span>0</span>
              </div>
              <div>
                <FaUser></FaUser>
                <span>1</span>
              </div>
            </S.Items>
          </div>
        </S.Info>
        <button>Repositórios</button>
      </S.Container>
    </MainContainer>
  );
};
