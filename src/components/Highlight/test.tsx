import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  img: 'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
  title: 'Casa',
  subtitle: '700 Imóveis'
}

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('heading', { name: /casa/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /700 imóveis/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
