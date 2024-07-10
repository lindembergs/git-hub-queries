import { FaSistrix } from "react-icons/fa";
export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FaSistrix></FaSistrix>
    </button>
  );
};
