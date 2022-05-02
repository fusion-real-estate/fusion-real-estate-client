import { gql } from '@apollo/client'

export const PropertyFragment = gql`
  fragment PropertyFragment on Property {
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
`
