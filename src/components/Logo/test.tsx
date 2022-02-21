import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a black label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Fusion/i).parentElement).toHaveStyle({
      color: '#373737'
    })
  })

  it('should render a white label when color is passed', () => {
    renderWithTheme(<Logo color="white" />)
    expect(screen.getByLabelText(/Fusion/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Fusion/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Fusion/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Fusion/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
