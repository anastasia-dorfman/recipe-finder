import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const Error = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message || "An unexpected error occurred."}</p>
    </Wrapper>
  );
};

export default Error;
