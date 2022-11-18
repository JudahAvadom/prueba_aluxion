import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
    query ($topic:String!){
    search(query:$topic, type: REPOSITORY, first: 10) {
        repositoryCount
            nodes {
                ... on Repository {
                nameWithOwner
                name
                description
                updatedAt
                createdAt
                diskUsage
                }
            }
        }
    }
`