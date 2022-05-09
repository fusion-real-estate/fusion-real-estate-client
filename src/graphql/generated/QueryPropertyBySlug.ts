/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROPERTY_STATUS, ENUM_PROPERTY_LABEL } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPropertyBySlug
// ====================================================

export interface QueryPropertyBySlug_properties_cover {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryPropertyBySlug_properties_category {
  __typename: "Category";
  name: string | null;
}

export interface QueryPropertyBySlug_properties_location {
  __typename: "Location";
  name: string;
}

export interface QueryPropertyBySlug_properties_gallery {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryPropertyBySlug_properties_facilities_icon {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryPropertyBySlug_properties_facilities {
  __typename: "Facilities";
  icon: QueryPropertyBySlug_properties_facilities_icon | null;
  name: string;
}

export interface QueryPropertyBySlug_properties {
  __typename: "Property";
  name: string;
  street: string;
  price: number | null;
  status: ENUM_PROPERTY_STATUS | null;
  description: string;
  cover: QueryPropertyBySlug_properties_cover | null;
  rooms: number;
  bathrooms: number;
  garage: number | null;
  sqt: number | null;
  category: QueryPropertyBySlug_properties_category | null;
  location: QueryPropertyBySlug_properties_location | null;
  label: ENUM_PROPERTY_LABEL | null;
  year: any | null;
  slug: string;
  gallery: QueryPropertyBySlug_properties_gallery[];
  facilities: QueryPropertyBySlug_properties_facilities[];
}

export interface QueryPropertyBySlug {
  properties: QueryPropertyBySlug_properties[];
}

export interface QueryPropertyBySlugVariables {
  slug?: string | null;
}
