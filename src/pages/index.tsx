import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'

import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

import {
  bannerMapper,
  categoriesMapper,
  locationMapper,
  propertiesMapper
} from 'utils/mappers'

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
      banners: bannerMapper(banners),
      newFeatureTitle: sections?.featured?.title,
      newFeatureSubTitle: sections?.featured?.subtitle,
      newFeature: propertiesMapper(featuredProperties),
      categoriesTitle: sections?.categories?.title,
      categoriesSubTitle: sections?.categories?.subtitle,
      newExplore: categoriesMapper(categories),
      promotionTitle: sections?.promotion?.title,
      promotionSubTitle: sections?.promotion?.subtitle,
      newRecents: propertiesMapper(promotionProperties),
      locationTitle: sections?.location?.title,
      locationSubTitle: sections?.location?.subtitle,
      newHighlight: locationMapper(locations),
      popularTitle: sections?.poularProperties?.title,
      popularSubTitle: sections?.poularProperties?.subtitle,
      poularProperties: propertiesMapper(sections!.poularProperties?.properties)
    }
  }
}
