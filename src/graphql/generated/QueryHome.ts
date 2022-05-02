/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome_featuredProperties_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_featuredProperties {
  __typename: "Property";
  name: string;
  street: string;
  slug: string;
  cover: QueryHome_featuredProperties_cover | null;
  rooms: number;
  bathrooms: number;
  garage: number | null;
  sqt: number | null;
  price: number | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  featuredProperties: QueryHome_featuredProperties[];
}
