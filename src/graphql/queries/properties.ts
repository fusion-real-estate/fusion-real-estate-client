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
