import { Routes, Route } from "react-router-dom";
import "./App.css";

import { HomePageLayout } from "./layouts";
import { AppPage, HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<HomePageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="app" element={<AppPage />} />
      </Route>
    </Routes>
  );
}

export default App;
