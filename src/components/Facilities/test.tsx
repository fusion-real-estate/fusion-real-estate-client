import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Facilities from '.'

const props = {
  icon:
    'https://res.cloudinary.com/dtykejdjn/image/upload/v1651790246/air_filter_78f05f422a.png',
  name: 'Ar Condicionado'
}

describe('<Facilities />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Facilities {...props} />)

    expect(screen.getByRole('heading', { name: props.name }))
  })
})
