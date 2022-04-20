import Base from 'templates/Base'

import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'

import * as S from './styles'
import TextContent from 'components/TextContent'

export type PropertyTemplateProps = {
  propertyInfo: SingleInfoProps
  gallery: GalleryImageProps[]
  description: string
}

const Property = ({
  propertyInfo,
  gallery,
  description
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
      </S.SectionPropertyInfo>
    </>
  </Base>
)

export default Property
