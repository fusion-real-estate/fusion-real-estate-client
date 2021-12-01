import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Fis Real Estate/i).parentElement).toHaveStyle(
      {
        color: '#FAFAFA'
      }
    )
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Fis Real Estate/i).parentElement).toHaveStyle(
      {
        color: '#030517'
      }
    )
  })
})
