import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CocktailMenu from "./Cocktails.tsx";
import Home from "./Home.tsx";
import RistoranteMenu from "./Ristorante.tsx";
import Storia from "./Storia.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cocktails",
        element: <CocktailMenu />,
      },
      {
        path: "/ristorante",
        element: <RistoranteMenu />,
      },
      {
        path: "/storia",
        element: <Storia />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
