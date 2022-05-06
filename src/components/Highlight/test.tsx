import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  img: 'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
  title: 'Casa'
}

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('heading', { name: /casa/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
