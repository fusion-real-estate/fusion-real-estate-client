/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_section_properties_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_properties {
  __typename: "Property";
  name: string;
  street: string;
  slug: string;
  cover: QueryRecommended_recommended_section_properties_cover | null;
  rooms: number;
  bathrooms: number;
  garage: number | null;
  sqt: number | null;
  price: number | null;
}

export interface QueryRecommended_recommended_section {
  __typename: "ComponentPagePoularProperties";
  title: string;
  subtitle: string | null;
  properties: QueryRecommended_recommended_section_properties[];
}

export interface QueryRecommended_recommended {
  __typename: "Recommended";
  section: QueryRecommended_recommended_section | null;
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null;
}
