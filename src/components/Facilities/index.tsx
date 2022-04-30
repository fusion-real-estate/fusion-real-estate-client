import Heading from 'components/Heading'

import * as S from './styles'

export type FacilitiesProps = {
  title: string
  content: string
}

const Facilities = ({ title, content }: FacilitiesProps) => (
  <S.Wrapper>
    <Heading lineLeft>{title}</Heading>
    <S.ListIcons>
      <S.BoxList>
        <S.Description>{content}</S.Description>
      </S.BoxList>
    </S.ListIcons>
  </S.Wrapper>
)

export default Facilities
