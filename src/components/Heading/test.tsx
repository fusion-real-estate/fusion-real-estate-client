import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Fusion</Heading>)

    expect(screen.getByRole('heading', { name: /Fusion/i })).toHaveStyle({
      color: '#373737'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Fusion</Heading>)

    expect(screen.getByRole('heading', { name: /Fusion/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Fusion</Heading>)

    expect(screen.getByRole('heading', { name: /Fusion/i })).toHaveStyle({
      'border-left': '0.7rem solid #34ABD0'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Fusion</Heading>)

    expect(screen.getByRole('heading', { name: /Fusion/i })).toHaveStyleRule(
      'border',
      '0.4rem solid #2691B2',
      {
        modifier: '::after'
      }
    )
  })
})
