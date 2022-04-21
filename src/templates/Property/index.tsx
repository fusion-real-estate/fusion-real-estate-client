import Base from 'templates/Base'

import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import Facilities, { FacilitiesProps } from 'components/Facilities'

import * as S from './styles'

export type PropertyTemplateProps = {
  propertyInfo: SingleInfoProps
  gallery: GalleryImageProps[]
  description: string
  facilities: FacilitiesProps
}

const Property = ({
  propertyInfo,
  gallery,
  description,
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
          <Facilities {...facilities} />
        </S.SectionFacilities>
      </S.SectionPropertyInfo>
    </>
  </Base>
)

export default Property
