import { render, screen } from '@testing-library/react'

import CardFacility from '.'

describe('<CardFacility />', () => {
  it('should render the heading', () => {
    render(<CardFacility />)

    expect(
      screen.getByRole('heading', { name: /CardFacility/i })
    ).toBeInTheDocument()
  })
})
