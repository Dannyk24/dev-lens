import RepoCard from "../../components/RepoCard";
import "./ProfileReposTab.css";

function ProfileReposTab({ repos, sort }) {
  if (sort === "stars") {
    return (
      <div className="profile-repos-tab">
        <div className="repos-grid">
          {repos.length > 0
            ? repos
                .slice() //slice so you dont directly modify the developers repos
                .sort((a, b) => b.stars - a.stars)
                .map((repository) => (
                  <RepoCard repository={repository} key={repository.id} />
                ))
            : "No repositories available"}
        </div>
      </div>
    );
  }

  return (
    <div className="profile-repos-tab">
      <div className="repos-grid">
        {repos.length > 0
          ? repos.map((repository) => (
              <RepoCard repository={repository} key={repository.id} />
            ))
          : "No repositories available"}
      </div>
    </div>
  );
}

export default ProfileReposTab;
