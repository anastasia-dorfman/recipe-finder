import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loader as recipesLoader } from "./pages/Home";
import RecipeDetail, {
  loader as recipeDetailLoader,
} from "./pages/RecipeDetail";
import Error from "./components/Error";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />, loader: recipesLoader },
      { path: "/:id", element: <RecipeDetail />, loader: recipeDetailLoader },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
