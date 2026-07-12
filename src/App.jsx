import { Routes, Route, useLocation } from "react-router";
import HomePage from "./pages/homepage/HomePage";
import RepoDetailsPage from "./pages/repo-details-page/RepoDetailsPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/repository/:owner/:repo" element={<RepoDetailsPage />} />
      <Route path="/profile/:username" element={<ProfilePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
