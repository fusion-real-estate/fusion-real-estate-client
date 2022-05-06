import {
  QueryHome_banners,
  QueryHome_categories,
  QueryHome_locations
} from 'graphql/generated/QueryHome'

import { QueryProperties_properties } from 'graphql/generated/QueryProperties'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
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
  }))
}

export const propertiesMapper = (
  properties: QueryProperties_properties[] | null | undefined
) => {
  return (
    properties &&
    properties.map((property) => ({
      title: property.name,
      slug: property.slug,
      address: property.street,
      beds: property.bathrooms,
      bath: property.rooms,
      garage: property.garage,
      sqt: property.sqt,
      img: property.cover?.url,
      price: property.price
    }))
  )
}

export const categoriesMapper = (
  categories: QueryHome_categories[] | null | undefined
) => {
  return (
    categories &&
    categories.map((category) => ({
      img: category.cover?.url,
      title: category.name
    }))
  )
}

export const locationMapper = (
  locations: QueryHome_locations[] | null | undefined
) => {
  return (
    locations &&
    locations.map((location) => ({
      img: location.cover?.url,
      title: location.name
    }))
  )
}
