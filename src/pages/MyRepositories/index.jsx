import { MainContainer } from "../../components/MainContainer/style";
import { Input } from "../../components/Input";
import { Repositories } from "../../components/Repositories";
import { useEffect, useState } from "react";

export const MyRepositories = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem("@userName");
    if (id) {
      setUserId(JSON.parse(id));
      console.log(userId);
    }
  }, [userId]);

  return (
    <MainContainer>
      <h2>Meus repositórios</h2>
      <Input placeholder="Filtrar seus repositórios" />
      <Repositories />
    </MainContainer>
  );
};
