import Heading from 'components/Heading'

import Icon from '@mdi/react'

import { mdiBedKingOutline, mdiShower, mdiCar, mdiFormTextarea } from '@mdi/js'

import formatPrice from 'utils/format-price'

import * as S from './styles'

export type SingleInfoProps = {
  title: string
  subtitle: string
  status?: string
  offer?: string
  beds: number
  bath: number
  garage: number
  sqt: number
  price: number
  type: string
}

const SingleInfo = ({
  title,
  subtitle,
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
          <S.Status>{status}</S.Status>
          <S.Offer>{offer}</S.Offer>
        </S.StylesBox>
      </S.BoxFeatures>

      <S.BoxInformation>
        <S.BoxList>
          <Icon path={mdiBedKingOutline} />
          <S.Description>
            {beds === 1 ? `${beds} Quarto` : `${beds} Quartos`}
          </S.Description>
        </S.BoxList>
        <S.BoxList>
          <Icon path={mdiShower} />
          <S.Description>
            {bath === 1 ? `${bath} Banheiro` : `${bath} Banheiros`}
          </S.Description>
        </S.BoxList>
        <S.BoxList>
          <Icon path={mdiCar} />
          <S.Description>
            {garage === 1 ? `${garage} Garagem` : `${garage} Garagens`}
          </S.Description>
        </S.BoxList>
        <S.BoxList>
          <Icon path={mdiFormTextarea} />
          <S.Description>
            {sqt === 1 ? `${sqt} Metro(m²)` : `${sqt} Metros(m²)`}
          </S.Description>
        </S.BoxList>
      </S.BoxInformation>
    </S.SingleContainer>

    <S.BuyTypeBox>
      <S.Price>{formatPrice(price)}</S.Price>
      <S.Type>{type}</S.Type>
    </S.BuyTypeBox>
  </S.Wrapper>
)

export default SingleInfo
