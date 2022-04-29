import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardsMock from 'components/CardSlider/mock'
import highlightMock from 'components/HighlightSlider/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
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
