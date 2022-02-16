import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Destaque</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toBeInTheDocument()
  })

  it('should render the primary color', () => {
    renderWithTheme(<Ribbon>Destaque</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      backgroundColor: '#095C76'
    })
  })

  it('should render the secondary color', () => {
    renderWithTheme(<Ribbon>Destaque</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      backgroundColor: '#095C76'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Destaques</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Destaques</Ribbon>)

    expect(screen.getByText(/Destaque/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
