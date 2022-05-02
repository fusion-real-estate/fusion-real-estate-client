import { BannerProps } from 'components/Banner'
import { CardProps } from 'components/Card'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'

import BannerSlider from 'components/BannerSlider'
import CardSlider from 'components/CardSlider'
import HighlightSlider from 'components/HighlightSlider'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newFeature: CardProps[]
  newExplore: HighlightProps[]
  newRecents: CardProps[]
  newHighlight: HighlightProps[]
  poularProperties: CardProps[]
  newFeatureTitle: string
  categoriesTitle: string
  promotionTitle: string
  locationTitle: string
  popularTitle: string
  newFeatureSubTitle: string
  categoriesSubTitle: string
  promotionSubTitle: string
  locationSubTitle: string
  popularSubTitle: string
}

const Home = ({
  banners,
  newFeature,
  newExplore,
  newRecents,
  newHighlight,
  poularProperties,
  newFeatureTitle,
  categoriesTitle,
  promotionTitle,
  locationTitle,
  popularTitle,
  newFeatureSubTitle,
  categoriesSubTitle,
  promotionSubTitle,
  locationSubTitle,
  popularSubTitle
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>

      <S.SectionDefault>
        <Showcase
          title={newFeatureTitle}
          subtitle={newFeatureSubTitle}
          color="black"
        />
        <CardSlider items={newFeature} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase title={categoriesTitle} subtitle={categoriesSubTitle} />
        <HighlightSlider items={newExplore} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase title={promotionTitle} subtitle={promotionSubTitle} />
        <CardSlider items={newRecents} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase title={locationTitle} subtitle={locationSubTitle} />
        <HighlightSlider items={newHighlight} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase title={popularTitle} subtitle={popularSubTitle} />
        <CardSlider items={poularProperties} />
      </S.SectionDefault>
    </Container>
  </Base>
)

export default Home
