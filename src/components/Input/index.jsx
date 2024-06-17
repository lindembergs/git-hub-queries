import * as S from "./styles";
import { FaSistrix } from "react-icons/fa";
export const Input = () => {
  return (
    <S.Container>
      <S.Input placeholder="Filtrar seus repositórios"></S.Input>
      <button>
        <FaSistrix></FaSistrix>
      </button>
    </S.Container>
  );
};
