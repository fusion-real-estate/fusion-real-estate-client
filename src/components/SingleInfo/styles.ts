import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.light};
    display: flex;
    justify-content: space-between;
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    padding-right: ${theme.spacings.xsmall};
  `}
`

export const BoxFeatures = styled.div`
  display: flex;
  align-items: center;
`

export const StylesBox = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    > div {
      width: 8rem;
      text-align: center;
      padding: 0.3rem 0.5rem;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
      border-radius: ${theme.border.radius};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const Feature = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
`

export const Status = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`

export const Offer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.hot};
  `}
`

export const BoxInformation = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const BoxList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-right: ${theme.spacings.xxsmall};

    svg {
      height: 2rem;
      width: 2rem;
      color: ${theme.colors.gray};
      margin-right: ${theme.spacings.xsmall};
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

export const SingleContainer = styled.div`
  text-align: left;
`

export const BuyTypeBox = styled.div`
  text-align: right;
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const Type = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
  `}
`
