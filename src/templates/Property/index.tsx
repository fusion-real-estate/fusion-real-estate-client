import Base from 'templates/Base'

import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'

import CardFacility from 'components/CardFacility'
import TextContent from 'components/TextContent'
import Showcase from 'components/Showcase'
import CardSlider from 'components/CardSlider'

import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

import * as S from './styles'
import { FacilitiesProps } from 'components/Facilities'

export type PropertyTemplateProps = {
  propertyInfo: SingleInfoProps
  gallery: GalleryImageProps[]
  description: string
  recommended: CardProps[]
  recommendedTitle: string
  recommendedSubTitle: string
  facilities: FacilitiesProps[]
}

const Property = ({
  propertyInfo,
  gallery,
  description,
  recommended,
  recommendedTitle,
  recommendedSubTitle,
  facilities
}: PropertyTemplateProps) => (
  <Base>
    <>
      <S.SectionGallery>
        <Gallery items={gallery} />
      </S.SectionGallery>

      <S.SectionPropertyInfo>
        <SingleInfo {...propertyInfo} />

        <S.SectionDescription>
          <TextContent title="Descrição" content={description} />
        </S.SectionDescription>

        <S.SectionFacilities>
          <CardFacility title="Facilidades" items={facilities} />
        </S.SectionFacilities>
      </S.SectionPropertyInfo>

      <Container>
        <S.SectionDefault>
          <Showcase title={recommendedTitle} subtitle={recommendedSubTitle} />
          <CardSlider items={recommended} />
        </S.SectionDefault>
      </Container>
    </>
  </Base>
)

export default Property
