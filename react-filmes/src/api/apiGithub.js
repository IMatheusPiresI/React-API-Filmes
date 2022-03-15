import axios from "axios";

export const apiGithubRepos = () => axios.create({
    baseURL: `https://api.github.com/users/imatheuspiresi/repos`
})

export const apiGithubUser = () => axios.create({
    baseURL: `https://api.github.com/users/imatheuspiresi`
})