import { initializeApollo } from 'utils/apollo'

import PropertiesTemplate, {
  PropertiesTemplateProps
} from 'templates/Properties'

import filterItemsMock from 'components/ExploreSidebar/mock'

import { QUERY_PROPERTIES } from 'graphql/queries/properties'

import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'

export default function PropertyPage(props: PropertiesTemplateProps) {
  return <PropertiesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryProperties,
    QueryPropertiesVariables
  >({
    query: QUERY_PROPERTIES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      properties: data.properties.map((item) => ({
        title: item.name,
        slug: item.slug,
        address: item.street,
        img: item.cover!.url,
        beds: item.bathrooms,
        bath: item.rooms,
        garage: item.garage,
        sqt: item.sqt,
        price: item.price
      })),
      filterItems: filterItemsMock
    }
  }
}
