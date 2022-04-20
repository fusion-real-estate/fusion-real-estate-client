import Base from 'templates/Base'

import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'

import * as S from './styles'

export type PropertyTemplateProps = {
  propertyInfo: SingleInfoProps
  gallery: GalleryImageProps[]
}

const Property = ({ propertyInfo, gallery }: PropertyTemplateProps) => (
  <Base>
    <>
      <S.SectionGallery>
        <Gallery items={gallery} />
      </S.SectionGallery>
      <S.SectionPropertyInfo>
        <SingleInfo {...propertyInfo} />
      </S.SectionPropertyInfo>
    </>
  </Base>
)

export default Property
