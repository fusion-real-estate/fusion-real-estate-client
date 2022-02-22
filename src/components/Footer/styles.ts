import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  background-color: #7839f3;
`

export const Container = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Logo = styled.div`
  height: 3.9rem;
`
