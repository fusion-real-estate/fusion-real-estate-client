import Icon from '@mdi/react'

import { mdiBedKingOutline, mdiShower, mdiCar, mdiFormTextarea } from '@mdi/js'

import * as S from './styles'

export type CardProps = {
  title: string
  address: string
  beds: string
  bath: string
  garage: string
  sqt: string
  img: string
  price: string
}

const Card = ({
  title,
  address,
  beds,
  bath,
  garage,
  sqt,
  img,
  price
}: CardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Address>{address}</S.Address>
    </S.Info>
    <S.Box>
      <S.BoxList>
        <Icon path={mdiBedKingOutline} size={2} />
        {beds}
      </S.BoxList>
      <S.BoxList>
        <Icon path={mdiShower} size={2} />
        {bath}
      </S.BoxList>
      <S.BoxList>
        <Icon path={mdiCar} size={2} />
        {garage}
      </S.BoxList>
      <S.BoxList>
        <Icon path={mdiFormTextarea} size={2} />
        {sqt}
      </S.BoxList>
    </S.Box>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
    </S.BuyBox>
  </S.Wrapper>
)

export default Card
