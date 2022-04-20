import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Wrapper = styled.main``

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionPropertyInfo = styled(Section)``
