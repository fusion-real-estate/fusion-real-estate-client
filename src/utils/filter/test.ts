import { parseQueryStringToWhere, parseQueryStringToFilter } from '.'

const filterItems = [
  { name: 'price_lte', type: 'radio' },
  { name: 'category', type: 'checkbox' },
  { name: 'location', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price_lte: 7000000,
  category: ['apartamento', 'casa'],
  location: 'Minas Gerais',
  sort: 'price:asc'
}

describe('parseQueryStringToWhere()', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price_lte: 7000000,
      category: {
        name_contains: ['apartamento', 'casa']
      },
      location: {
        name_contains: 'Minas Gerais'
      }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to values format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price_lte: 7000000,
      category: ['apartamento', 'casa'],
      location: ['Minas Gerais'],
      sort: 'price:asc'
    })
  })
})
