import { CardProps } from 'components/Card'
import * as S from './styles'

export type PropertiesTemplateProps = {
  properties: CardProps[]
}

const PropertiesTemplate = ({ properties = [] }: PropertiesTemplateProps) => (
  <S.Wrapper>
    <h1>PropertiesTemplate</h1>
  </S.Wrapper>
)

export default PropertiesTemplate
