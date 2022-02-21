import { BannerProps } from 'components/Banner'
import { CardProps } from 'components/Card'
import { ShowcaseProps } from 'components/Showcase'

import { Container } from 'components/Container'

import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import CardSlider from 'components/CardSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newFeature: CardProps[]
  newExplore: ShowcaseProps
  newRecents: CardProps[]
  newShowcase: ShowcaseProps
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
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Destaques
      </Heading>
      <Subtitle>Imóveis em destaques</Subtitle>
      <CardSlider items={newFeature} />
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Explore
      </Heading>
      <Subtitle>Faça sua pesquisa por tipo de imóvel</Subtitle>
      <Showcase {...newExplore} />
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Recentes
      </Heading>
      <Subtitle>Imóveis recentes</Subtitle>
      <CardSlider items={newRecents} />
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Pesquisa por cidade
      </Heading>
      <Subtitle>Faça sua busca por cidade</Subtitle>
      <Showcase {...newShowcase} />
    </Container>
  </section>
)

export default Home
