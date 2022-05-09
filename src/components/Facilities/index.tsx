import * as S from './styles'

export type FacilitiesProps = {
  icon: string
  name: string
}

const Facilities = ({ icon, name }: FacilitiesProps) => (
  <S.Wrapper>
    <S.BoxList>
      <S.Icon>
        <img src={icon} alt={name} />
      </S.Icon>
      <S.Description>{name}</S.Description>
    </S.BoxList>
  </S.Wrapper>
)

export default Facilities
