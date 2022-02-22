import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ShowcaseSlider from '.'

const items = [
  {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Casa',
    subtitle: '700 Imóveis'
  },
  {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Aparatmento',
    subtitle: '200 Imóveis'
  },
  {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Casa',
    subtitle: '700 Imóveis'
  },
  {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Aparatmento',
    subtitle: '200 Imóveis'
  },
  {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Casa',
    subtitle: '700 Imóveis'
  },
  {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Aparatmento',
    subtitle: '200 Imóveis'
  }
]

describe('<ShowcaseSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<ShowcaseSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<ShowcaseSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
