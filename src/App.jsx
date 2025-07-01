import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/pokemon/:pokemonName", element: <PokemonPage></PokemonPage> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
