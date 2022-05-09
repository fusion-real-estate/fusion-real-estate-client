import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const BoxList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-right: ${theme.spacings.xxlarge};
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
    margin-left: ${theme.spacings.xxsmall};
  `}
`
