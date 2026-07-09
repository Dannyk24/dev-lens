import RepoCard from "./RepoCard";
import "./ProfileReposTab.css";

function ProfileReposTab() {
  return (
    <div className="profile-repos-tab">
      <div className="repos-grid">
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>
    </div>
  );
}

export default ProfileReposTab;
