import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: var(--primary-800);
  padding: 3rem 0;

  .content {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  p {
    color: var(--grey-300);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <div className="content">
        <p>&copy; {currentYear} Recipe Finder. All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
