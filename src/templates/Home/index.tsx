import { BannerProps } from 'components/Banner'
import { CardProps } from 'components/Card'
import { ShowcaseProps } from 'components/Showcase'

import { Container } from 'components/Container'

import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import CardSlider from 'components/CardSlider'
import Footer from 'components/Footer'
import ShowcaseSlider from 'components/ShowcaseSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newFeature: CardProps[]
  newExplore: ShowcaseProps[]
  newRecents: CardProps[]
  newShowcase: ShowcaseProps[]
}

const Home = ({
  banners,
  newFeature,
  newExplore,
  newRecents,
  newShowcase
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionFeature>
      <Container>
        <S.SectionSepartor>
          <Heading lineLeft color="black">
            Destaques
          </Heading>
          <Subtitle>Imóveis em destaques</Subtitle>
        </S.SectionSepartor>
        <CardSlider items={newFeature} />
      </Container>
    </S.SectionFeature>

    <S.SectionExplore>
      <Container>
        <S.SectionSepartor>
          <Heading lineLeft color="black">
            Explore
          </Heading>
          <Subtitle>Faça sua pesquisa por tipo de imóvel</Subtitle>
        </S.SectionSepartor>
        <ShowcaseSlider items={newExplore} />
      </Container>
    </S.SectionExplore>

    <S.SectionRecents>
      <Container>
        <S.SectionSepartor>
          <Heading lineLeft color="black">
            Recentes
          </Heading>
          <Subtitle>Imóveis recentes</Subtitle>
        </S.SectionSepartor>
        <CardSlider items={newRecents} />
      </Container>
    </S.SectionRecents>

    <S.SectionSearch>
      <Container>
        <S.SectionSepartor>
          <Heading lineLeft color="black">
            Pesquisa por cidade
          </Heading>
          <Subtitle>Faça sua busca por cidade</Subtitle>
        </S.SectionSepartor>
        <ShowcaseSlider items={newShowcase} />
      </Container>
    </S.SectionSearch>

    <Footer />
  </section>
)

export default Home
