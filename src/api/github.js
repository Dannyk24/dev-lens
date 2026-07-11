import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json", //Githubs vendor json format
  },
});

export default githubApi;
