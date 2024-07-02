import * as S from "../../components/Repositories/style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { MainContainer } from "../../components/MainContainer/style";
import { Repositories } from "../../components/Repositories";

export const OtherRepositories = () => {
  const [userId, setUserId] = useState(null);
  const [userRepo, setUserRepo] = useState([]);

  const getRepositories = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}/repos`);
      console.log("get", response.data);
      setUserRepo(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    const id = sessionStorage.getItem("@userName");
    if (id) {
      const parsedId = JSON.parse(id);
      setUserId(parsedId);
      getRepositories(parsedId);
    }
  }, []);
  return (
    <MainContainer>
      <h2>Outros repositórios</h2>
      <Input placeholder="Pesquise por repositórios"></Input>
      {userRepo.map((repo) => (
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
