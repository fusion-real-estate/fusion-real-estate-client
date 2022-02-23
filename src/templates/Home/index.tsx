import { BannerProps } from 'components/Banner'
import { CardProps } from 'components/Card'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'

import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import CardSlider from 'components/CardSlider'
import Footer from 'components/Footer'
import HighlightSlider from 'components/HighlightSlider'
import Showcase from 'components/Showcase'

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
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>

      <S.SectionDefault>
        <Showcase title="Destaques" subtitle="Imóveis em destaques" />
        <CardSlider items={newFeature} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase
          title="Explore"
          subtitle="Faça sua pesquisa por tipo de imóvel"
        />
        <HighlightSlider items={newExplore} />
      </S.SectionDefault>

      <S.SectionDefault>
        <Showcase title="Recentes" subtitle="Imóveis recentes" />
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

    <Footer />
  </section>
)

export default Home