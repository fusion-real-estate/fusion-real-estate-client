import { gql } from '@apollo/client'

import { BannerFragment } from 'graphql/fragments/banner'
import { PropertyFragment } from 'graphql/fragments/property'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    featuredProperties: properties(where: { label: "featured" }, limit: 8) {
      ...PropertyFragment
    }

    categories {
      name
      cover {
        url
      }
    }

    promotionProperties: properties(where: { label: "hot" }, limit: 8) {
      ...PropertyFragment
    }

    locations {
      name
      cover {
        url
      }
    }
  }

  ${BannerFragment}
  ${PropertyFragment}
`
