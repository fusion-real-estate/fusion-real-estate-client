import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { SubtitleProps } from '.'

export const Wrapper = styled.h3<SubtitleProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
      margin-left: ${theme.spacings.xsmall};
      margin-top: -${theme.spacings.xxsmall};
      margin-bottom: ${theme.spacings.small};
    `}
  `}
`
