import * as S from './styles'

export type SubtitleProps = {
  children: React.ReactNode
  color?: 'white' | 'gray'
}

const Subtitle = ({ children, color = 'gray' }: SubtitleProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Subtitle
