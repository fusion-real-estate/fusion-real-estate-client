import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'

import Property, { PropertyTemplateProps } from 'templates/Property'

import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'

import {
  QUERY_PROPERTIES,
  QUERY_PROPERTY_BY_SLUG
} from 'graphql/queries/properties'

import {
  QueryPropertyBySlug,
  QueryPropertyBySlugVariables
} from 'graphql/generated/QueryPropertyBySlug'

import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { propertiesMapper } from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: PropertyTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Property {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryProperties,
    QueryPropertiesVariables
  >({
    query: QUERY_PROPERTIES,
    variables: { limit: 9 }
  })

  const paths = data.properties.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // get properties
  const { data } = await apolloClient.query<
    QueryPropertyBySlug,
    QueryPropertyBySlugVariables
  >({
    query: QUERY_PROPERTY_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.properties.length) {
    return { notFound: true }
  }

  const property = data.properties[0]

  // get recommended
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      revalidate: 60,
      propertyInfo: {
        title: property.name,
        subtitle: property.street,
        feature: property.label,
        status: property.status,
        offer: 'Oferta',
        beds: `${property.rooms} Quartos`,
        bath: `${property.bathrooms} Banheiros`,
        garage: `${property.garage} Garagem`,
        sqt: `${property.sqt} Metros`,
        price: property.price,
        type: property.category?.name
      },
      gallery: property.gallery.map((image) => ({
        src: image.url,
        label: image.alternativeText
      })),
      description: property.description,
      facilities: property.facilities.map((item) => item.name),
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedSubTitle: recommended.recommended?.section?.subtitle,
      recommended: propertiesMapper(
        recommended.recommended?.section?.properties
      )
    }
  }
}
