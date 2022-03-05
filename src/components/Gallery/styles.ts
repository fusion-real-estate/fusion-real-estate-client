import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.gray};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 5rem;
      height: 5rem;
      padding: 1rem;
      border-radius: 50%;
      z-index: ${theme.layers.overlay};
      transform: translate(0, -50%);
      background-color: ${theme.colors.white};
    }

    .slick-prev {
      left: -${theme.spacings.xxsmall};
    }

    .slick-next {
      right: -${theme.spacings.xxsmall};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      /* margin: 0 ${theme.spacings.xsmall}; */
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`
