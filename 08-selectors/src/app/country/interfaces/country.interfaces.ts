

export interface Country {
  name:         Name;
  ccn3?:        string;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion:    Subregion;
  languages:    Languages;
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  cca3:         string;
  translations: { [key: string]: Translation };
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Region[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  Americas = "Americas",
  Africa = "Africa",
}

export interface Currency {
  symbol: string;
  name:   string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  swe?: string;
  cat?: string;
  ita?: string;
  slv?: string;
  ukr?: string;
  lav?: string;
  deu?: string;
  hrv?: string;
  ell?: string;
  bos?: string;
  srp?: string;
  cnr?: string;
  ron?: string;
  eng?: string;
  pol?: string;
  nor?: string;
  est?: string;
  mlt?: string;
  fra?: string;
  nrf?: string;
  rus?: string;
  glv?: string;
  dan?: string;
  fao?: string;
  ltz?: string;
  mkd?: string;
  bul?: string;
  gle?: string;
  gsw?: string;
  roh?: string;
  ces?: string;
  slk?: string;
  isl?: string;
  nld?: string;
  sqi?: string;
  fin?: string;
  tur?: string;
  bel?: string;
  hun?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  por?: string;
  lit?: string;
  nfr?: string;
  spa?: string;
  eus?: string;
  glc?: string;
  lat?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: null | string;
  regex:  null | string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
