import * as S from "./styles";
export const Input = ({ placeholder, ...props }) => {
  return (
    <S.InputContainer>
      <S.Input placeholder={placeholder} {...props}></S.Input>
    </S.InputContainer>
  );
};
