import { Container } from 'components/Container'
import Logo from 'components/Logo'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Text>Copyright © 2022. All Right Reserved.</S.Text>
        <S.Logo>
          <Logo color="white" />
        </S.Logo>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default Footer
