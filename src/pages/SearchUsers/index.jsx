import * as S from "./styles";
import { Input } from "../../components/Input";
import { MainContainer } from "../../components/MainContainer/style";
import { FaArchive, FaUser } from "react-icons/fa";
import { InputContainer } from "../../components/Input/styles";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
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
      console.log(data);
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
      {loading && <Loading></Loading>}
      {error && <p>{error}</p>}
      {userData && (
        <S.Container>
          <S.Info>
            <a href={userData.html_url} target="_blank">
              <figure>
                <img
                  src={userData.avatar_url}
                  alt="Foto do perfil do usuário"
                />
              </figure>
            </a>
            <div>
              <a href={userData.html_url} target="_blank">
                <p>{userData.name}</p>
              </a>
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
