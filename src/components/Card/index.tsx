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
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Address>{address}</S.Address>
      </S.Info>
      <S.Box>
        <S.BoxList>
          <Icon path={mdiBedKingOutline} />
          <S.Description>{beds}</S.Description>
        </S.BoxList>
        <S.BoxList>
          <Icon path={mdiShower} />
          <S.Description>{bath}</S.Description>
        </S.BoxList>
        <S.BoxList>
          <Icon path={mdiCar} />
          <S.Description>{garage}</S.Description>
        </S.BoxList>
        <S.BoxList>
          <Icon path={mdiFormTextarea} />
          <S.Description>{sqt}</S.Description>
        </S.BoxList>
      </S.Box>
      <S.BuyBox>
        <S.Price>{price}</S.Price>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default Card
