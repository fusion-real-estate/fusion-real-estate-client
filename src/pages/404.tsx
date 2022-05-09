import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="Whoops: Página não encontrada!"
          description="Volte até a home"
          hasLink
        />
      </Container>
    </Base>
  )
}
