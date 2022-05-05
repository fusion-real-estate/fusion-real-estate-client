import { GetServerSidePropsContext } from 'next'
import { initializeApollo } from 'utils/apollo'

import PropertiesTemplate, {
  PropertiesTemplateProps
} from 'templates/Properties'

import { parseQueryStringToWhere } from 'utils/filter'

import { QUERY_PROPERTIES } from 'graphql/queries/properties'

import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'

export default function PropertyPage(props: PropertiesTemplateProps) {
  return <PropertiesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Preço',
    name: 'price_lte',
    type: 'radio',
    fields: [
      { label: 'Abaixo de R$500.000,00', name: '500000' },
      { label: 'Abaixo de R$8.000.000,00', name: '8000000' }
    ]
  }
  const filterSort = {
    title: 'Ordenar',
    name: 'sort',
    type: 'radio',
    fields: [
      { label: 'Maior Valor', name: 'price:desc' },
      { label: 'Menor Valor', name: 'price:asc' }
    ]
  }
  const filtercategories = {
    title: 'Categoria',
    name: 'category',
    type: 'checkbox',
    fields: [
      { label: 'Casa', name: 'casa' },
      { label: 'Apartamento', name: 'apartamento' }
    ]
  }
  const filterLocation = {
    title: 'Localidade',
    name: 'location',
    type: 'checkbox',
    fields: [
      {
        label: 'Minas Gerais',
        name: 'Minas Gerais'
      },
      {
        label: 'Santa Catarina',
        name: 'Santa Catarina'
      }
    ]
  }

  const filterItems = [
    filterPrice,
    filterSort,
    filtercategories,
    filterLocation
  ]

  await apolloClient.query<QueryProperties, QueryPropertiesVariables>({
    query: QUERY_PROPERTIES,
    variables: {
      limit: 9,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
