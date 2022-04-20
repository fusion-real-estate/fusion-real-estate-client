import Base from 'templates/Base'

import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'

import * as S from './styles'

export type PropertyTemplateProps = {
  propertyInfo: SingleInfoProps
}

const Property = ({ propertyInfo }: PropertyTemplateProps) => (
  <Base>
    <S.SectionPropertyInfo>
      <SingleInfo {...propertyInfo} />
    </S.SectionPropertyInfo>
  </Base>
)

export default Property
