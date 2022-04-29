import { gql } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'

import PropertiesTemplate, {
  PropertiesTemplateProps
} from 'templates/Properties'

import filterItemsMock from 'components/ExploreSidebar/mock'

export default function PropertyPage(props: PropertiesTemplateProps) {
  return <PropertiesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: gql`
      query QueryProperties {
        properties {
          name
          slug
          cover {
            url
          }
          rooms
          bathrooms
          garage
          sqt
          price
        }
      }
    `
  })

  return {
    props: {
      revalidate: 60,
      properties: data.properties.map((item) => ({
        title: item.name,
        img: item.cover.url,
        beds: item.bathrooms,
        bath: item.rooms,
        garage: item.garage,
        sqt: item.sqt,
        price: new Intl.NumberFormat('pt', {
          style: 'currency',
          currency: 'BRL'
        }).format(item.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
