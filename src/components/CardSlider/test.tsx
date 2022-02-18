import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardSlider from '.'

const items = [
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  }
]

describe('<CardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<CardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
