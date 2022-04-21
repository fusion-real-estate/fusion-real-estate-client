import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const ListIcons = styled.div`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    background: ${theme.colors.lightGray};

    border-radius: 50%;

    margin-right: ${theme.spacings.xsmall};
  `}
`

export const BoxList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
    margin-right: ${theme.spacings.xxsmall};

    svg {
      height: 2rem;
      width: 2rem;
      color: ${theme.colors.gray};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
