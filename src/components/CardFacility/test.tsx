import { renderWithTheme } from 'utils/tests/helpers'

import CardFacility from '.'

const items = [
  {
    icon:
      'https://res.cloudinary.com/dtykejdjn/image/upload/v1651790246/air_filter_78f05f422a.png',
    name: 'Ar Condicionado'
  },
  {
    icon:
      'https://res.cloudinary.com/dtykejdjn/image/upload/v1651790259/grill_outline_d950aed23f.png',
    name: 'Churrasqueira'
  }
]

describe('<CardFacility />', () => {
  it('should render the cards articles lenght', () => {
    renderWithTheme(<CardFacility title="Facilidades" items={items} />)
  })
})
