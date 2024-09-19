import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  border: 1px solid var(--grey-300);
  border-radius: var(--border-radius);
  padding: 1rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-2);
  }

  img {
    width: 100%;
    height: 200px;
  }
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Wrapper to={`/${recipe.id}`}>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
    </Wrapper>
  );
};

export default RecipeCard;
