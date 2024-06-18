import * as S from "./styles";
import { FaSistrix } from "react-icons/fa";
export const Input = ({ placeholder, ...props }) => {
  return (
    <S.Container>
      <S.Input placeholder={placeholder} {...props}></S.Input>
      <button>
        <FaSistrix></FaSistrix>
      </button>
    </S.Container>
  );
};
