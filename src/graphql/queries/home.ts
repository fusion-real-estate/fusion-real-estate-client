import { gql } from '@apollo/client'

import { BannerFragment } from 'graphql/fragments/banner'
import { PropertyFragment } from 'graphql/fragments/property'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    featuredProperties: properties(where: { label: "Destaque" }, limit: 8) {
      ...PropertyFragment
    }

    categories {
      name
      cover {
        url
      }
    }

    promotionProperties: properties(where: { label: "Promocao" }, limit: 8) {
      ...PropertyFragment
    }

    locations {
      name
      cover {
        url
      }
    }

    sections: home {
      featured {
        title
        subtitle
      }

      categories {
        title
        subtitle
      }

      promotion {
        title
        subtitle
      }

      location {
        title
        subtitle
      }

      poularProperties {
        title
        subtitle
        properties(limit: 8) {
          ...PropertyFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${PropertyFragment}
`
