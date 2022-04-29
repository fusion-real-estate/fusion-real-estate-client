import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardsMock from 'components/CardSlider/mock'
import highlightMock from 'components/HighlightSlider/mock'
import { gql, useQuery } from '@apollo/client'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getProperties {
      properties {
        name
      }
    }
  `)

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newFeature: cardsMock,
      newExplore: highlightMock,
      newRecents: cardsMock,
      newHighlight: highlightMock
    }
  }
}
