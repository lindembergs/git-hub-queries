import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { SpinnerBox } from "./style";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0f24e6;
`;

export const Loading = () => {
  return (
    <SpinnerBox>
      <div className="sweet-loading" style={{ marginLeft: "30px" }}>
        <ClipLoader
          color="#0f24e6"
          css={override}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </SpinnerBox>
  );
};
