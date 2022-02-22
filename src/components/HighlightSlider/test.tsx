import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HighlightSlider from '.'

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

describe('<HighlightSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<HighlightSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<HighlightSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
