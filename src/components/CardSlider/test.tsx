import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardSlider from '.'

const items = [
  {
    title: 'New Apartment Nice Wiew',
    slug: 'luxury-family-loft-by-victoria-park',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 1200.0
  },
  {
    title: 'New Apartment Nice Wiew',
    slug: 'luxury-family-loft-by-victoria-park',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 1200.0
  },
  {
    title: 'New Apartment Nice Wiew',
    slug: 'luxury-family-loft-by-victoria-park',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 1200.0
  },
  {
    title: 'New Apartment Nice Wiew',
    slug: 'luxury-family-loft-by-victoria-park',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 1200.0
  },
  {
    title: 'New Apartment Nice Wiew',
    slug: 'luxury-family-loft-by-victoria-park',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 1200.0
  }
]

describe('<CardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<CardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
