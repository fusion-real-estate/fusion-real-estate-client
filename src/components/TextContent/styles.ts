import styled, { css } from 'styled-components'

import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium};
      color: ${theme.colors.primary};
    `}

    p {
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.small};
    }
    a {
      color: ${theme.colors.primary};
    }
    img {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }
    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
