import Heading from 'components/Heading'

import Icon from '@mdi/react'

import { mdiAirFilter, mdiGrillOutline } from '@mdi/js'

import * as S from './styles'

export type FacilitiesProps = {
  title: string
  airConditioning?: string
  barbeque?: string
}

const Facilities = ({ title, airConditioning, barbeque }: FacilitiesProps) => (
  <S.Wrapper>
    <Heading lineLeft>{title}</Heading>
    <S.ListIcons>
      <S.BoxList>
        <S.IconWrapper>
          <Icon path={mdiAirFilter} />
        </S.IconWrapper>
        <S.Description>{airConditioning}</S.Description>
      </S.BoxList>
      <S.BoxList>
        <S.IconWrapper>
          <Icon path={mdiGrillOutline} />
        </S.IconWrapper>
        <S.Description>{barbeque}</S.Description>
      </S.BoxList>
    </S.ListIcons>
  </S.Wrapper>
)

export default Facilities
