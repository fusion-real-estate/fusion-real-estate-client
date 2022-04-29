import { gql } from '@apollo/client'

export const QUERY_PROPERTIES = gql`
  query QueryProperties($limit: Int!) {
    properties(limit: $limit) {
      name
      street
      slug
      cover {
        url
      }
      rooms
      bathrooms
      garage
      sqt
      price
    }
  }
`
