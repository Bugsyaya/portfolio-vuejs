import axios from 'axios'
import ApolloClient, { gql } from 'apollo-boost'

import SECRET from './.secret.json'

let API_URL = 'https://api.github.com/'

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + SECRET.TOKEN}
  });
  
const ENDPOINT_URL = 'https://api.github.com/graphql'

export const client = new ApolloClient({
  uri: ENDPOINT_URL,
  headers: { Authorization: 'Bearer ' + SECRET.TOKEN }
});

const fetcher = {
  get: url => instance.get(`${url}`),
  post: (url, data) => instance.post(`${url}`, data)
}

export const getProjects = () => fetcher.get(`users/${SECRET.USER}/repos`).then(response => response.data.filter(p => p.name !== SECRET.USER))
export const getProjectByName = (name) => fetcher.get(`repos/${SECRET.USER}/${name}`)
export const getProjectLanguageByName = (name) => fetcher.get(`repos/${SECRET.USER}/${name}/languages`)
export const getProfil = () => fetcher.get(`users/${SECRET.USER}`)
export const getProfilProject = async () => {
    const profil = await fetcher.get(`repos/${SECRET.USER}/${SECRET.USER}/community/profile`)
    profil.data
    return profil
}

export const allProject =
    gql`
    {
        repositoryOwner(login:"Bugsyaya") {
            repositories(first:50, affiliations:OWNER) {
                nodes{
                    updatedAt,
                    createdAt,
                    languages(first:10) {
                        nodes{
                            name
                        }
                    },
                    description,
                    forkCount,
                    stargazerCount,
                    name,
                    url,
                    repositoryTopics(first:10) {
                        edges{
                            node{
                                topic{
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    `

export const byProjectName =
gql`
  query($name: String!) {
    repositoryOwner(login:"Bugsyaya") {
      repository(name: $name) {
        id,
        name,
      }
    }
  }
`

export const loadConfig = async () => {
    const { data } = await axios.get('/static/config.json')
    if (data && data.backend) API_URL = data.backend
    return API_URL
}
