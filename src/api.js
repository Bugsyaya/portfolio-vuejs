import ApolloClient, { gql } from 'apollo-boost'

import SECRET from './.secret.json'
  
const ENDPOINT_URL = 'https://api.github.com/graphql'

export const client = new ApolloClient({
  uri: ENDPOINT_URL,
  headers: { Authorization: 'Bearer ' + SECRET.TOKEN }
});

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
