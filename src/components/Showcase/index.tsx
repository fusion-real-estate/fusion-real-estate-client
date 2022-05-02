import CardSlider from 'components/CardSlider'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'

import { CardProps } from 'components/Card'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  subtitle?: string
  cards?: CardProps[]
  color?: 'black' | 'white'
}

const Showcase = ({
  title,
  subtitle,
  cards,
  color = 'black'
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft color="black">
        {title}
      </Heading>
    )}

    {!!subtitle && <Subtitle>{subtitle}</Subtitle>}

    {!!cards && <CardSlider items={cards} color={color} />}
  </S.Wrapper>
)

export default Showcase
