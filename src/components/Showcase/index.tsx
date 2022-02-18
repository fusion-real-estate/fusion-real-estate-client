import * as S from './styles'

export type ShowcaseProps = {
  img: string
  title: string
  subtitle: string
}

const Showcase = ({ img, title, subtitle }: ShowcaseProps) => (
  <S.Wrapper>
    <S.Image src={img} aria-label={title} role="img" />

    <S.Caption>
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Box>
    </S.Caption>
  </S.Wrapper>
)

export default Showcase
