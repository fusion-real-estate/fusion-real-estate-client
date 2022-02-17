import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
  title: 'New Apartment Nice Wiew',
  address: '4 W 21st St Flatiron District, New York, NY',
  beds: '4',
  bath: '1',
  garage: '1',
  sqt: '150',
  img: 'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
  price: 'R$ 1200.000,00'
}

describe('<Card />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Card {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.address })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })
})
