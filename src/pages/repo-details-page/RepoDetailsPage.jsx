import {
  Book,
  ExternalLink,
  User,
  GitCommitHorizontal,
  Users,
  Clock,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/ui/BackButton";
import RepoOverview from "./RepoOverview";
import "./RepoDetailsPage.css";
import RepoReadme from "./RepoReadme";
import RepoLicense from "./RepoLicense";
import RepoTopContributors from "./RepoTopContributors";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchRepository } from "../../api/githubServices";
import Loader from "../../components/Loader";
import { Link } from "react-router";
import dayjs from "dayjs";
import { getRelativeTime } from "../../utils/time";
import RelatedRepos from "./RelatedRepos";
import ErrorState from "../profile-page/ErrorState";

function RepoDetailsPage() {
  const { owner, repo } = useParams();

  const [repository, setRepository] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function getRepository() {
    try {
      setIsError(false);
      setIsLoading(true);
      const data = await fetchRepository(owner, repo);
      setRepository(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function loadRepository() {
      await getRepository();
    }
    loadRepository();
  }, [owner, repo]);

  return (
    <>
      <Navbar />
      <BackButton />
      <div className="repo-details-page">
        {isLoading && <Loader />}
        {isError && (
          <ErrorState
            onRetry={() => {
              getRepository();
            }}
            message={"Failed to fetch repository"}
          />
        )}
        <div className="repo-details-top">
          <div className="left">
            <div className="repo-owner-container">
              <div className="repo-owner-avatar-container">
                <img src={repository && repository.owner.avatar} alt="" />
              </div>
              <span className="repo-owner-name-container">
                Owner:
                <Link to={`/profile/${owner}`}>
                  {repository && repository.owner.username}
                </Link>
              </span>
            </div>
            <div className="repo-name-container">
              <Book />
              <span>{repository && repository.name}</span>
            </div>
            <p className="repo-description">
              {repository && repository.description}
            </p>
          </div>
          <div className="right">
            {repository && (
              <div className="repo-ctas-container">
                <a
                  className="cta primary-cta"
                  href={repository && `https://www.github.com/${owner}/${repo}`}
                >
                  <ExternalLink />
                  <span>View on Github</span>
                </a>
                <Link className="cta secondary-cta" to={`/profile/${owner}`}>
                  <User />
                  <span>Visit Owner</span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="decorative-line"></div>

        {repository && <RepoOverview repository={repository} />}

        <div className="repo-topic-badges-container">
          {repository &&
            repository.topics.map((topic) => {
              return (
                <div className="topic-badge" key={topic}>
                  {topic}
                </div>
              );
            })}
        </div>

        <section id="repo-information-main-container">
          <div className="left">
            {repository && <RepoReadme readme={repository.readme} />}
          </div>
          <div className="right">
            {repository && <RepoLicense repository={repository} />}
            {repository && <RepoTopContributors repository={repository} />}
          </div>
        </section>
        <section id="repo-statistics">
          <div className="section-header-sm">Repository statistics</div>
          <div className="repo-stat-display-cards">
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <GitCommitHorizontal />
              </div>
              <span className="stat-display-card-value">
                {repository &&
                  repository.contributors.reduce((accumulator, contributor) => {
                    return contributor.contributions + accumulator;
                  }, 0)}
              </span>
              <span className="stat-display-card-category">Total commits</span>
            </div>
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <Users />
              </div>
              <span className="stat-display-card-value">
                {repository && repository.contributors.length}
              </span>
              <span className="stat-display-card-category">Contributors</span>
            </div>
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <Clock />
              </div>
              <span className="stat-display-card-value">
                {repository &&
                  dayjs(repository.createdAt).format("MMMM D, YYYY")}
              </span>
              <span className="stat-display-card-category">Created on</span>
            </div>
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <Clock />
              </div>
              <span className="stat-display-card-value">
                {repository && getRelativeTime(repository.updatedAt)}
              </span>
              <span className="stat-display-card-category">Last updated</span>
            </div>
          </div>
        </section>
        <div className="decorative-line"></div>
        {repository?.topics.length > 0 && (
          <section id="related-repos">
            <div className="section-header-sm">Related repositories</div>
            {repository && <RelatedRepos repository={repository} />}
          </section>
        )}
      </div>
    </>
  );
}

export default RepoDetailsPage;
