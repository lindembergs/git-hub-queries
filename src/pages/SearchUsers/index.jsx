import * as S from "./styles";
import { Input } from "../../components/Input";
import { MainContainer } from "./../../components/MainContainer/style";
import { UserImg } from "../../components/icons/User";
import { FaArchive, FaUser } from "react-icons/fa";
import { InputContainer } from "../../components/Input/styles";
import { Button } from "../../components/Button";
import { api, requestHeaders } from "../../services/api";
import { useState } from "react";

export const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchUsers = async () => {
    try {
      const response = await api.get(`/users/${searchValue}`, requestHeaders());
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <MainContainer>
      <h2>Buscar usuários</h2>
      <InputContainer>
        <Input
          placeholder="Buscar usuários"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></Input>
        <Button onClick={handleSearchUsers}>Buscar</Button>
      </InputContainer>
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
