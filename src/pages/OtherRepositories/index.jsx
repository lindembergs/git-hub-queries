import * as S from "../../components/Repositories/style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { MainContainer } from "../../components/MainContainer/style";

export const OtherRepositories = () => {
  const [searchRepo, setSearchRepo] = useState([]);

  const getRepositories = async () => {
    try {
      const response = await api.get(`/search/repositories?q=chatbot`);
      console.log("otherRepositories", response.data.Items);
      setSearchRepo(response.data.items);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    getRepositories();
  }, []);
  return (
    <MainContainer>
      <h2>Outros repositórios</h2>
      <Input placeholder="Pesquise por repositórios"></Input>
      {searchRepo.map((repo) => (
        <S.Container key={repo.id}>
          <S.AncorDiv>
            <a href={repo.html_url} target="_blank">
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
