import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import Menu from 'components/Menu'

import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Destaques
      </Heading>
      <Subtitle>Imóveis em destaques</Subtitle>
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Explore
      </Heading>
      <Subtitle>Faça sua pesquisa por tipo de imóvel</Subtitle>
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Recentes
      </Heading>
      <Subtitle>Imóveis recentes</Subtitle>
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Pesquisa por cidade
      </Heading>
      <Subtitle>Faça sua busca por cidade</Subtitle>
    </Container>
  </section>
)

export default Home
