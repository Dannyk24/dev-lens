import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import RepoDetailsPage from "./pages/RepoDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/repository/:repoId" element={<RepoDetailsPage />} />
      <Route path="/profile/:profileId" element={<ProfilePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
