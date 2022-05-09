import { render, screen } from '@testing-library/react'

import Facilities from '.'

describe('<Facilities />', () => {
  it('should render the heading', () => {
    render(<Facilities />)

    expect(
      screen.getByRole('heading', { name: /Facilities/i })
    ).toBeInTheDocument()
  })
})
