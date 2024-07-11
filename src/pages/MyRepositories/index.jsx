import * as S from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { requestHeaders } from "../../services/api";
import { MainContainer } from "../../components/MainContainer/style";
import { Input } from "../../components/Input";
import { InputContainer } from "../../components/Input/styles";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";

export const MyRepositories = () => {
  const [userId, setUserId] = useState(null);
  const [userRepo, setUserRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRepositories = async (userId) => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `/users/${userId}/repos`,
        requestHeaders()
      );
      setUserRepo(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setIsLoading(false);
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
      <h2>Meus repositórios</h2>
      <InputContainer>
        <Input placeholder="Filtrar seus repositórios" />
        <Button></Button>
      </InputContainer>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        userRepo.map((repo) => (
          <S.Container key={repo.id}>
            <S.AncorDiv>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
              <span>{repo.private ? "Private" : "Public"}</span>
            </S.AncorDiv>
            {repo.description ? (
              <p>{repo.description}</p>
            ) : (
              <p>Sem descrição</p>
            )}
            <S.Footer>
              <S.Info>
                <span>{repo.language}</span>
                <span>☆ {repo.stargazers_count}</span>
                <span>🔀 {repo.forks_count}</span>
              </S.Info>
              <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
            </S.Footer>
          </S.Container>
        ))
      )}
    </MainContainer>
  );
};
