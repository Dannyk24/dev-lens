import { useCallback, useEffect, useState } from "react";
import RepoCard from "../../components/RepoCard";
import DeveloperCardSkeleton from "../../components/DeveloperCardSkeleton";
import { fetchRelatedRepos } from "../../api/githubServices";
import ErrorState from "../profile-page/ErrorState";
import { getRandomIndex } from "../../utils/random";
import "./RelatedRepos.css";

function RelatedRepos({ repository }) {
  const [relatedRepos, setRelatedRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getRelatedRepos = useCallback(async function (topic) {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchRelatedRepos(topic);
      setRelatedRepos(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (repository.topics.length === 0) {
      setIsLoading(false);
      return;
    }
    const topic = repository.topics[getRandomIndex(repository.topics)];
    async function loadRelatedRepos() {
      await getRelatedRepos(topic);
    }
    loadRelatedRepos();
  }, [repository.topics, getRelatedRepos]);

  return (
    <div className="related-repos-grid">
      {isLoading && <DeveloperCardSkeleton />}
      {isError && (
        <ErrorState
          message={"Failed to fetch related repositories"}
          onRetry={() => {
            const topic = repository.topics[getRandomIndex(repository.topics)];
            getRelatedRepos(topic);
          }}
        />
      )}
      {relatedRepos &&
        relatedRepos.map((repo) => {
          return (
            <RepoCard repository={repo} owner={repo.owner} key={repo.id} />
          );
        })}
    </div>
  );
}

export default RelatedRepos;
