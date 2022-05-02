import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'

import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: {
      banners,
      featuredProperties,
      categories,
      promotionProperties,
      locations,
      sections
    }
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
      newFeatureTitle: sections?.featured?.title,
      newFeatureSubTitle: sections?.featured?.subtitle,
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
      categoriesTitle: sections?.categories?.title,
      categoriesSubTitle: sections?.categories?.subtitle,
      newExplore: categories.map((category) => ({
        img: category.cover?.url,
        title: category.name,
        subtitle: '700 Imóveis'
      })),
      promotionTitle: sections?.promotion?.title,
      promotionSubTitle: sections?.promotion?.subtitle,
      newRecents: promotionProperties.map((promotion) => ({
        title: promotion.name,
        slug: promotion.slug,
        address: promotion.street,
        beds: promotion.bathrooms,
        bath: promotion.rooms,
        garage: promotion.garage,
        sqt: promotion.sqt,
        img: promotion.cover?.url,
        price: promotion.price
      })),
      locationTitle: sections?.location?.title,
      locationSubTitle: sections?.location?.subtitle,
      newHighlight: locations.map((location) => ({
        img: location.cover?.url,
        title: location.name,
        subtitle: '700 Imóveis'
      })),
      popularTitle: sections?.poularProperties?.title,
      popularSubTitle: sections?.poularProperties?.subtitle,
      poularProperties: sections!.poularProperties!.properties.map(
        (popular) => ({
          title: popular.name,
          slug: popular.slug,
          address: popular.street,
          beds: popular.bathrooms,
          bath: popular.rooms,
          garage: popular.garage,
          sqt: popular.sqt,
          img: popular.cover?.url,
          price: popular.price
        })
      )
    }
  }
}
