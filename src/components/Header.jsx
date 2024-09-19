import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  background-color: var(--primary-800);
  padding: 2.5rem 0;
  box-shadow: var(--shadow-1);
  margin-bottom: 2rem;

  .content {
    margin: 0 5rem;
    padding: 0 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5rem;
  }

  h1 {
    color: var(--white);
  }

  a,
  Link {
    color: var(--white);
    font-weight: bold;
    padding: 0 1rem;
    padding-left: 1rem;
    transition: padding-left 0.3s ease-in-out;

    &:hover {
      color: var(--grey-300);
      padding-left: 1.5rem;
      transition: var(--transition);
    }
  }
`;

const Header = ({ title = "Recipe Finder" }) => {
  return (
    <Wrapper>
      <div className="content">
        <h1>{title}</h1>
        <Link to="/">Home</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
