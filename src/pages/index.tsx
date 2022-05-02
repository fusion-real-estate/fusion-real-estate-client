import Home, { HomeTemplateProps } from 'templates/Home'

import cardsMock from 'components/CardSlider/mock'
import highlightMock from 'components/HighlightSlider/mock'

import { initializeApollo } from 'utils/apollo'

import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, featuredProperties }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newFeature: featuredProperties.map((property) => ({
        title: property.name,
        slug: property.slug,
        address: property.street,
        beds: property.bathrooms,
        bath: property.rooms,
        garage: property.garage,
        sqt: property.sqt,
        img: property.cover?.url,
        price: property.price
      })),
      newExplore: highlightMock,
      newRecents: cardsMock,
      newHighlight: highlightMock
    }
  }
}
