import { gql } from '@apollo/client'
import { PropertyFragment } from 'graphql/fragments/property'

export const QUERY_PROPERTIES = gql`
  query QueryProperties($limit: Int!, $start: Int) {
    properties(limit: $limit, start: $start) {
      ...PropertyFragment
    }
  }

  ${PropertyFragment}
`

export const QUERY_PROPERTY_BY_SLUG = gql`
  query QueryPropertyBySlug($slug: String) {
    properties(where: { slug: $slug }) {
      name
      street
      price
      status
      description
      cover {
        url
        alternativeText
      }
      rooms
      bathrooms
      garage
      sqt
      category {
        name
      }
      location {
        name
      }
      label
      year
      slug
      gallery {
        url
        alternativeText
      }
      facilities {
        name
      }
    }
  }
`
