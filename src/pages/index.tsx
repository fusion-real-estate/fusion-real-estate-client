import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardsMock from 'components/CardSlider/mock'
import showcaseMock from 'components/ShowcaseSlider/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newFeature: cardsMock,
      newExplore: showcaseMock,
      newRecents: cardsMock,
      newShowcase: showcaseMock
    }
  }
}
