import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Facilities from '.'

const props = {
  title: 'Facilities',
  content: 'Barbeque'
}

describe('<Facilities />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Facilities {...props} />)

    expect(
      screen.getByRole('heading', { name: /facilities/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  // it('should render icons and title', () => {
  //   renderWithTheme(<Facilities {...props} />)

  //   expect(screen.getByText(/air conditioning/i)).toBeInTheDocument()
  //   expect(screen.getByText(/barbeque/i)).toBeInTheDocument()
  // })
})
