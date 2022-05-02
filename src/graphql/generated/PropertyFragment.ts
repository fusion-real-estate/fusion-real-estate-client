/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PropertyFragment
// ====================================================

export interface PropertyFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface PropertyFragment {
  __typename: "Property";
  name: string;
  street: string;
  slug: string;
  cover: PropertyFragment_cover | null;
  rooms: number;
  bathrooms: number;
  garage: number | null;
  sqt: number | null;
  price: number | null;
}
