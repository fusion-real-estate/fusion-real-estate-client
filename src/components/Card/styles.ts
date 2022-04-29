import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.lightGray};
    text-align: center;
  `}
`

export const ImageBox = styled.div`
  height: 20rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
`

export const Info = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Address = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${theme.spacings.xsmall};
  `}
`

export const BoxList = styled.div`
  ${({ theme }) => css`
    display: block;
    align-items: center;

    svg {
      height: 2rem;
      width: 2rem;
      color: ${theme.colors.gray};
    }
  `}
`
export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: ${theme.spacings.small};
    border-top: 1px solid ${theme.colors.lightGray};
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
