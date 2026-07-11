import githubApi from "./github";

let developerAbortController = new AbortController();

export async function fetchDevelopers(query, page) {
  developerAbortController.abort();
  developerAbortController = new AbortController();

  const response = await githubApi.get(
    `/search/users?q=${query}&page=${page}&per_page=10`,
    {
      signal: developerAbortController.signal,
    },
  );
  let data = response.data.items.map((developer) => {
    return {
      id: developer.id,
      name: developer.login,
      avatar: developer.avatar_url,
      accountType: developer.type,
    };
  });

  const results = {
    totalCount: response.data.total_count,
    data,
  };

  return results;
}

let repositoriesAbortController = new AbortController();
export async function fetchRepositories(query, page) {
  repositoriesAbortController.abort();
  repositoriesAbortController = new AbortController();

  const response = await githubApi.get(
    `/search/repositories?q=${query}&page=${page}&per_page=10`,
    {
      signal: repositoriesAbortController.signal,
    },
  );
  let data = response.data.items.map((repository) => {
    return {
      id: repository.id,
      name: repository.name,
      description: repository.description,
      language: repository.language,
      owner: repository.owner.login,
      forks: repository.forks,
      stars: repository.stargazers_count,
      updatedAt: repository.updated_at,
    };
  });

  const results = {
    totalCount: response.data.total_count,
    data,
  };

  return results;
}

export async function fetchDeveloper(username) {
  const [data, repos] = await Promise.all([
    fetchDeveloperData(username),
    fetchDeveloperRepos(username),
  ]);

  const result = {
    username: data.login,
    avatar: data.avatar_url,
    accountType: data.type,
    displayName: data.name,
    company: data.company,
    blog: data.blog,
    location: data.location,
    email: data.email,
    bio: data.bio,
    publicRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
    createdAt: data.created_at,
    repos,
  };

  return result;
}

async function fetchDeveloperData(username) {
  const { data } = await githubApi.get(`/users/${username}`);
  return data;
}

async function fetchDeveloperRepos(username) {
  const { data } = await githubApi.get(`/users/${username}/repos`);
  const results = data.map((repository) => {
    return {
      id: repository.id,
      name: repository.name,
      description: repository.description,
      language: repository.language,
      owner: repository.owner.login,
      forks: repository.forks,
      stars: repository.stargazers_count,
      updatedAt: repository.updated_at,
    };
  });
  return results;
}
