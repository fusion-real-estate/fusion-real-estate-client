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
}

const Home = ({
  banners,
  newFeature,
  newExplore,
  newRecents,
  newHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>

      <S.SectionDefault>
        <Showcase
          title="Destaques"
          subtitle="Imóveis em destaques"
          color="black"
        />
        <CardSlider items={newFeature} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase
          title="Categorias"
          subtitle="Faça sua pesquisa por categoria de imóvel"
        />
        <HighlightSlider items={newExplore} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase
          title="Promoções"
          subtitle="Imóveis em promoção, não perca tempo!"
        />
        <CardSlider items={newRecents} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase
          title="Pesquisa por cidade"
          subtitle="Faça sua busca por cidade"
        />
        <HighlightSlider items={newHighlight} />
      </S.SectionDefault>
    </Container>
  </Base>
)

export default Home
