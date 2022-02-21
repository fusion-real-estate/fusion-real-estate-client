import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Subtitle from '.'

describe('<Subtitle />', () => {
  it('should render a gray heading by default', () => {
    renderWithTheme(<Subtitle>Subtitle</Subtitle>)

    expect(screen.getByRole('heading', { name: /subtitle/i })).toHaveStyle({
      color: '#7D7D7D'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Subtitle color="white">Subtitle</Subtitle>)

    expect(screen.getByRole('heading', { name: /subtitle/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
