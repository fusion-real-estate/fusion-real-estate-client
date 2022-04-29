import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardsMock from 'components/CardSlider/mock'
import highlightMock from 'components/HighlightSlider/mock'
import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'

const GET_PROPERTIES = gql`
  query getProperties {
    properties {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_PROPERTIES })

  return {
    props: {
      data: data,
      initializeApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newFeature: cardsMock,
      newExplore: highlightMock,
      newRecents: cardsMock,
      newHighlight: highlightMock
    }
  }
}
