/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProperties
// ====================================================

export interface QueryProperties_properties_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProperties_properties {
  __typename: "Property";
  name: string;
  street: string;
  slug: string;
  cover: QueryProperties_properties_cover | null;
  rooms: number;
  bathrooms: number;
  garage: number | null;
  sqt: number | null;
  price: number | null;
}

export interface QueryProperties {
  properties: QueryProperties_properties[];
}

export interface QueryPropertiesVariables {
  limit: number;
  start?: number | null;
}
