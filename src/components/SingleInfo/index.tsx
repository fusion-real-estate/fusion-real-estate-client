import Heading from 'components/Heading'

import Icon from '@mdi/react'

import { mdiBedKingOutline, mdiShower, mdiCar, mdiFormTextarea } from '@mdi/js'

import * as S from './styles'

export type SingleInfoProps = {
  title: string
  subtitle: string
  feature?: string
  status?: string
  offer?: string
  beds: string
  bath: string
  garage: string
  sqt: string
  price: string
  type: string
}

const SingleInfo = ({
  title,
  subtitle,
  feature,
  status,
  offer,
  beds,
  bath,
  garage,
  sqt,
  price,
  type
}: SingleInfoProps) => (
  <S.Wrapper>
    <S.SingleContainer>
      <Heading>{title}</Heading>

      <S.BoxFeatures>
        <S.Title>{subtitle}</S.Title>

        <S.StylesBox>
          <S.Feature>{feature}</S.Feature>
          <S.Status>{status}</S.Status>
          <S.Offer>{offer}</S.Offer>
        </S.StylesBox>
      </S.BoxFeatures>

      <S.BoxInformation>
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
      </S.BoxInformation>
    </S.SingleContainer>

    <S.BuyTypeBox>
      <S.Price>{price}</S.Price>
      <S.Type>{type}</S.Type>
    </S.BuyTypeBox>
  </S.Wrapper>
)

export default SingleInfo
