import { MainContainer } from "../../components/MainContainer/style";
import { Input } from "../../components/Input";
import { Repositories } from "../../components/Repositories";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const MyRepositories = () => {
  const [userId, setUserId] = useState(null);
  const [userRepo, setUserRepo] = useState([]);

  const getRepositories = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}/repos`);
      console.log("get", response.data);
      setUserRepo(response);
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
      <h2>Meus repositórios</h2>
      <Input placeholder="Filtrar seus repositórios" />
      <Repositories />
    </MainContainer>
  );
};
