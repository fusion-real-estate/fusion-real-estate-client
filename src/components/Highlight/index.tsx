import * as S from './styles'

export type HighlightProps = {
  img: string
  title: string
  subtitle: string
}

const Highlight = ({ img, title, subtitle }: HighlightProps) => (
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

export default Highlight
