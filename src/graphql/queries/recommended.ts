import { gql } from '@apollo/client'

import { PropertyFragment } from 'graphql/fragments/property'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        subtitle
        properties {
          ...PropertyFragment
        }
      }
    }
  }

  ${PropertyFragment}
`
