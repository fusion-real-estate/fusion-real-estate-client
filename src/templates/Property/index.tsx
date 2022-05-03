import Base from 'templates/Base'

import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import Facilities from 'components/Facilities'

import * as S from './styles'
import Showcase from 'components/Showcase'
import CardSlider from 'components/CardSlider'
import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

export type PropertyTemplateProps = {
  propertyInfo: SingleInfoProps
  gallery: GalleryImageProps[]
  description: string
  facilities: string
  recommended: CardProps[]
  recommendedTitle: string
  recommendedSubTitle: string
}

const Property = ({
  propertyInfo,
  gallery,
  description,
  facilities,
  recommended,
  recommendedTitle,
  recommendedSubTitle
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
          <Facilities title="Facilidades" content={facilities} />
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
