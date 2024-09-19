import styled from "styled-components";

const Wrapper = styled.div`
  max-width: var(--fluid-width);
  margin: 0 auto;
  padding: 0;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--grey-900);
  }

  form {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;

    input {
      padding: 1rem;
      border: 1px solid var(--grey-300);
      border-radius: var(--border-radius);
      flex-grow: 1;
      color: var(--text-color);
      background: var(--background-color);
      outline: none;
    }

    select {
      padding: 1rem 2rem;
      border: 1px solid var(--grey-300);
      border-radius: var(--border-radius);
      color: var(--text-color);
      background: var(--background-color);
    }

    button {
      padding: 1rem 2rem;
      background-color: var(--primary-700);
      color: var(--white);
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        background-color: var(--primary-700);
      }

      &.clear {
        background-color: var(--red-dark);
      }
    }
  }
  .recipes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 3rem 0;
  }
`;

export default Wrapper;
