import styled from "styled-components";

const Wrapper = styled.div`
  max-width: var(--fluid-width);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    margin-bottom: 1.5rem;
  }

  .details {
    display: flex;
    justify-content: start;
    align-items: start;
  }

  .details-text {
    margin-left: 3rem;
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }

  .detail-section {
    margin-bottom: 1.5rem;

    h2 {
      margin-bottom: 0.5rem;
    }

    ul {
      margin-left: 1.5rem;
    }

    div {
      margin-left: 1.5rem;
    }
  }
`;

export default Wrapper;
