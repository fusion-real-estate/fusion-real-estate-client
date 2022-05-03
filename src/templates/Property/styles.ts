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

export const SectionGallery = styled.div`
  display: none;
  overflow: hidden;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const SectionDescription = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
  `}
`

export const SectionFacilities = styled.div``

export const SectionDefault = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 2rem;
      padding-bottom: 2rem;
    `}
  `}
`
