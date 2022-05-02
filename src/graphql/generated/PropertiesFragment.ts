/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PropertiesFragment
// ====================================================

export interface PropertiesFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface PropertiesFragment {
  __typename: "Property";
  name: string;
  street: string;
  slug: string;
  cover: PropertiesFragment_cover | null;
  rooms: number;
  bathrooms: number;
  garage: number | null;
  sqt: number | null;
  price: number | null;
}
