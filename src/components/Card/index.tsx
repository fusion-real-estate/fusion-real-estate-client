import Link from 'next/link'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import Icon from '@mdi/react'

import { mdiBedKingOutline, mdiShower, mdiCar, mdiFormTextarea } from '@mdi/js'

import formatPrice from 'utils/format-price'

import * as S from './styles'

export type CardProps = {
  title: string
  slug: string
  address: string
  beds: string
  bath: string
  garage: string
  sqt: string
  img: string
  price: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Card = ({
  title,
  slug,
  address,
  beds,
  bath,
  garage,
  sqt,
  img,
  price,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: CardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`property/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`property/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Address>{address}</S.Address>
        </S.Info>
      </Link>
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
        <S.Price>{formatPrice(price)}</S.Price>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default Card
