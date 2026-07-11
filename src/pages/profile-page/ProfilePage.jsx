import { ExternalLink, Dot } from "lucide-react";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/ui/BackButton";
import ProfileCard from "./ProfileCard";
import ProfileOverviewTab from "./ProfileOverviewTab";
import "./ProfilePage.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchDeveloper } from "../../api/githubServices";
import dayjs from "dayjs";
import ProfileReposTab from "./ProfileReposTab";
import Loader from "../../components/Loader";
import ErrorState from "./ErrorState";

function ProfilePage() {
  const [developer, setDeveloper] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { username } = useParams();
  async function getDeveloper() {
    setIsError(false);
    setIsLoading(true);
    try {
      const developer = await fetchDeveloper(username);
      setDeveloper(developer);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function loadDeveloper() {
      await getDeveloper();
    }
    loadDeveloper();
  }, [username]);

  function renderActiveTab() {
    if (activeTab === "overview") {
      return (
        <ProfileOverviewTab developer={developer} repos={developer.repos} />
      );
    } else if (activeTab === "repositories") {
      return <ProfileReposTab repos={developer.repos} />;
    } else if (activeTab === "stars") {
      return <ProfileReposTab repos={developer.repos} sort={"stars"} />;
    }
  }

  return (
    <>
      <Navbar />
      <div className="profile-page">
        {isLoading && <Loader />}
        <BackButton />
        <div className="profile-shell">
          {developer && <ProfileCard developer={developer} />}
          <div className="profile-main">
            <span className="profile-name">{developer?.displayName}</span>
            <div className="profile-link-row">
              <a
                href={`https://github.com/${developer?.username}`}
                className="view-on-github-link"
                target="_blank"
              >
                <ExternalLink />
                <span>View on Github</span>
              </a>
              <div className="decorative-dot">
                <Dot />
              </div>
              <span className="year-joined">
                Joined {dayjs(developer?.createdAt).format("YYYY")}
              </span>
            </div>
            <div className="profile-tabs-container">
              <div className="tab-selectors-container">
                <div
                  className={
                    activeTab === "overview"
                      ? "tab-selector-container active-tab"
                      : "tab-selector-container"
                  }
                  onClick={() => {
                    setActiveTab("overview");
                  }}
                >
                  <span>Overview</span>
                  <div className="active-tab-line-indicator"></div>
                </div>
                <div
                  className={
                    activeTab === "repositories"
                      ? "tab-selector-container active-tab"
                      : "tab-selector-container"
                  }
                  onClick={() => {
                    setActiveTab("repositories");
                  }}
                >
                  <span>Repositories</span>
                  <div className="active-tab-line-indicator"></div>
                </div>
                <div
                  className={
                    activeTab === "stars"
                      ? "tab-selector-container active-tab"
                      : "tab-selector-container"
                  }
                  onClick={() => {
                    setActiveTab("stars");
                  }}
                >
                  <span>Stars</span>
                  <div className="active-tab-line-indicator"></div>
                </div>
              </div>
              <div className="decorative-line tab-selector-underline"></div>
            </div>
            {isError && (
              <ErrorState
                onRetry={getDeveloper}
                message={"Failed to fetch user click below to try again"}
              />
            )}
            {developer && renderActiveTab()}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
