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

  await apolloClient.query<QueryProperties, QueryPropertiesVariables>({
    query: QUERY_PROPERTIES,
    variables: { limit: 1 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
