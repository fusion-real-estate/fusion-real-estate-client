import { Container } from 'components/Container'
import Heading from 'components/Heading'
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
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Explore
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Recentes
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft color="black">
        Pesquisa por cidade
      </Heading>
    </Container>
  </section>
)

export default Home
