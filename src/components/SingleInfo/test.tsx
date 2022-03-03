import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SingleInfo from '.'

const props = {
  title: 'Title',
  subtitle: 'Subtitle',
  feature: 'Destaque',
  status: 'Venda',
  offer: 'Oferta',
  beds: '4',
  bath: '1',
  garage: '1',
  sqt: '150',
  price: '1200.000,00',
  type: 'Apartamento'
}

describe('<SingleInfo />', () => {
  it('should render single information', () => {
    const { container } = renderWithTheme(<SingleInfo {...props} />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(screen.getByText(/subtitle/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render single information features', () => {
    renderWithTheme(<SingleInfo {...props} />)

    expect(screen.getByText(/destaque/i)).toBeInTheDocument()
    expect(screen.getByText(/venda/i)).toBeInTheDocument()
    expect(screen.getByText(/oferta/i)).toBeInTheDocument()
  })
})
