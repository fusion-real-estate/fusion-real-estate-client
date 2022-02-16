import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img:
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'É muito bom estar em casa!',
  subtitle: 'Encontre sua casa perfeita'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /é muito bom estar em casa!/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /encontre sua casa perfeita/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /é muito bom estar em casa!/i })
    ).toBeInTheDocument()
  })
})
