import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'title default',
  description: 'description default'
}

describe('<Empty />', () => {
  it('should render the empty', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('heading', { name: /Title Default/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/description default/i)).toBeInTheDocument()
  })
})
