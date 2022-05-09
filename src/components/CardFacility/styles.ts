import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xsmall};
  `}
`
