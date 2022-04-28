import { render, screen } from '@testing-library/react'

import Properties from '.'

describe('<Properties />', () => {
  it('should render the heading', () => {
    const { container } = render(<Properties />)

    expect(screen.getByRole('heading', { name: /Properties/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
