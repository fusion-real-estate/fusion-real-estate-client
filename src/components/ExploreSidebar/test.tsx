import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

import items from './mock'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(screen.getByRole('heading', { name: /preço/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /ordenar/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /categoria/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /localidade/i })
    ).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(screen.getByRole('checkbox', { name: /abaixo de R\$200/i }))

    expect(screen.getByRole('radio', { name: /menor valor/i }))
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} />)

    expect(screen.getByRole('button', { name: /filtrar/i })).toBeInTheDocument()
  })
})
