import Facilities, { FacilitiesProps } from 'components/Facilities'
import Heading from 'components/Heading'

import * as S from './styles'

export type CardFacilityProps = {
  title: string
  items: FacilitiesProps[]
}

const CardFacility = ({ title, items }: CardFacilityProps) => (
  <S.Wrapper>
    <Heading lineLeft>{title}</Heading>
    <S.Content>
      {items.map((item, index) => (
        <Facilities key={index} {...item} />
      ))}
    </S.Content>
  </S.Wrapper>
)

export default CardFacility
