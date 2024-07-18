import * as S from "./styles";
import { Input } from "../../components/Input";
import { MainContainer } from "../../components/MainContainer/style";
import { FaArchive, FaUser } from "react-icons/fa";
import { InputContainer } from "../../components/Input/styles";
import { Button } from "../../components/Button";
import { api, requestHeaders } from "../../services/api";
import { useState } from "react";

export const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/users/${searchValue}`, requestHeaders());
      const data = response.data;
      setUserData(data);
    } catch (error) {
      setError("Erro ao buscar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <h2>Buscar usuários</h2>
      <InputContainer>
        <Input
          placeholder="Buscar usuários"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={handleSearchUsers}>Buscar</Button>
      </InputContainer>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <S.Container>
          <S.Info>
            <figure>
              <img src={userData.avatar_url} alt="Foto do perfil do usuário" />
            </figure>
            <div>
              <p>{userData.name}</p>
              <S.Items>
                <div>
                  <FaArchive />
                  <span>{userData.public_repos}</span>
                </div>
                <div>
                  <FaUser />
                  <span>{userData.followers}</span>
                </div>
              </S.Items>
            </div>
          </S.Info>
          <Button>Repositórios</Button>
        </S.Container>
      )}
    </MainContainer>
  );
};
