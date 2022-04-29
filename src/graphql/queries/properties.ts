import { gql } from '@apollo/client'

export const QUERY_PROPERTIES = gql`
  query QueryProperties {
    properties {
      name
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
