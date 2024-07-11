import * as S from "../MyRepositories/styles";
import { useState } from "react";
import { api, requestHeaders } from "../../services/api";
import { Input } from "../../components/Input";
import { MainContainer } from "../../components/MainContainer/style";
import { Button } from "../../components/Button";
import { InputContainer } from "../../components/Input/styles";

export const OtherRepositories = () => {
  const [searchRepo, setSearchRepo] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleGetRepositories = async () => {
    try {
      const response = await api.get(
        `/search/repositories?q=${searchValue}`,
        requestHeaders()
      );
      setSearchRepo(response.data.items);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  return (
    <MainContainer>
      <h2>Outros repositórios</h2>
      <InputContainer>
        <Input
          placeholder="Pesquise por repositórios"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={handleGetRepositories}>Buscar</Button>
      </InputContainer>

      {searchRepo.map((repo) => (
        <S.Container key={repo.id}>
          <S.AncorDiv>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <span>{repo.private ? "Private" : "Public"}</span>
          </S.AncorDiv>
          {repo.description ? <p>{repo.description}</p> : <p>Sem descrição</p>}
          <S.Footer>
            <S.Info>
              <span>{repo.language}</span>
              <span>☆ {repo.stargazers_count}</span>
              <span>🔀 {repo.forks_count}</span>
            </S.Info>
            <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
          </S.Footer>
        </S.Container>
      ))}
    </MainContainer>
  );
};
