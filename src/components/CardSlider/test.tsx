import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardSlider from '.'

describe('<CardSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CardSlider />)

    expect(
      screen.getByRole('heading', { name: /CardSlider/i })
    ).toBeInTheDocument()
  })
})
