/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { CharacterDetail } from "./pages/CharacterDetail";
import { World } from "./pages/World";
import { Schedule } from "./pages/Schedule";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "characters", element: <Characters /> },
      { path: "characters/:id", element: <CharacterDetail /> },
      { path: "world", element: <World /> },
      { path: "schedule", element: <Schedule /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
