import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { PropertyFragment } from 'graphql/fragments/property'

import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'

export const QUERY_PROPERTIES = gql`
  query QueryProperties(
    $limit: Int!
    $start: Int
    $where: JSON
    $sort: String
  ) {
    properties(limit: $limit, start: $start, where: $where, sort: $sort) {
      ...PropertyFragment
    }

    propertiesConnection(where: $where) {
      values {
        id
      }
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

export function useQueryProperties(
  options?: QueryHookOptions<QueryProperties, QueryPropertiesVariables>
) {
  return useQuery<QueryProperties, QueryPropertiesVariables>(
    QUERY_PROPERTIES,
    options
  )
}
