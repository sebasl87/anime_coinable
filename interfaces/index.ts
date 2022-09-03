import { ElementType } from 'react';

export interface HeaderContentProps {
  handleClick?: () => void;
  isMobile?: boolean;
  historyBack?: string;
}
export interface CalendarDateProps {
  isMobile?: boolean;
}
export interface MediaProps {
  ll?: string;
  lg?: string;
  md?: string;
  sm?: string;
}

export interface MediaPropsInt {
  ll?: number;
  lg?: number;
  md?: number;
  sm?: number;
}

export interface IDivMaster {
  scrollDesignDisable?: boolean;
  scrollSnapAlign?: string;
  overflowX?: string | MediaProps;
  transition?: string | MediaProps;
  top?: string | MediaProps;
  right?: string | MediaProps;
  bottom?: string | MediaProps;
  left?: string | MediaProps;
  children?: React.ReactNode;
  background?: string;
  padding?: string | MediaProps;
  margin?: string | MediaProps;
  justifyContent?: string | MediaProps;
  flexDirection?: string | MediaProps;
  alignItems?: string | MediaProps;
  alignSelf?: string | MediaProps;
  alignContent?: string | MediaProps;
  maxWidth?: string | MediaProps;
  maxHeight?: string | MediaProps;
  minHeight?: string | MediaProps;
  width?: string | MediaProps;
  display?: string | MediaProps;
  boxShadow?: string | MediaProps;
  overflow?: string | MediaProps;
  border?: string | MediaProps;
  borderRadius?: number | MediaPropsInt;
  position?: string | MediaProps;
  textAlign?: string | MediaProps;
  whiteSpace?: string | MediaProps;
  br?: string | MediaProps;
  onClick?: () => void;
  mb?: number | MediaPropsInt;
  mt?: number | MediaPropsInt;
  mr?: number | MediaPropsInt;
  ml?: number | MediaPropsInt;
  mx?: number | MediaPropsInt;
  my?: number | MediaPropsInt;
  pb?: number | MediaPropsInt;
  pt?: number | MediaPropsInt;
  pr?: number | MediaPropsInt;
  pl?: number | MediaPropsInt;
  px?: number | MediaPropsInt;
  py?: number | MediaPropsInt;
  zIndex?: number | MediaPropsInt;
  height?: string | MediaProps;
  order?: number | MediaPropsInt;
  boxShadowHover?: string | MediaProps;
  opacityHover?: number | MediaPropsInt;
  cursor?: string | MediaProps;
  minWidth?: string | MediaProps;
  overflowy?: string;
  rowGap?: number | MediaPropsInt;
  columnGap?: number | MediaPropsInt;
  flexWrap?: string | MediaProps;
  opacity?: number | MediaPropsInt;
  boxSizing?: 'content-box' | 'border-box' | 'inherit' | 'initial' | 'unset';
  gridTemplateColumns?: string | MediaProps;
  gridTemplateRows?: string | MediaProps;
  gap?: string | MediaProps;
}
export interface IText {
  opacity?: number;
  borderRadius?: number;
  border?: string;
  children?: React.ReactNode | string;
  display?: string | MediaProps;
  fontColor?: string;
  fontType?: string | MediaProps;
  justifyContent?: string | MediaProps;
  alignItems?: string | MediaProps;
  margin?: string | MediaProps;
  whiteSpace?: string | MediaProps;
  mb?: number | MediaPropsInt;
  ml?: number | MediaPropsInt;
  mr?: number | MediaPropsInt;
  mt?: number | MediaPropsInt;
  mx?: number | MediaPropsInt;
  my?: number | MediaPropsInt;
  padding?: string | MediaProps;
  pb?: number | MediaPropsInt;
  pl?: number | MediaPropsInt;
  pr?: number | MediaPropsInt;
  pt?: number | MediaPropsInt;
  px?: number | MediaPropsInt;
  py?: number | MediaPropsInt;
  textAlign?: string | MediaProps;
  textDecoration?: string;
  width?: string | MediaProps;
  boxShadowHover?: string | MediaProps;
  handleClick?: () => void;
  cursor?: string | MediaProps;
  colorHover?: string;
  textTransform?: string;
  tagType?: ElementType<unknown>;
  flex?: number;
  alignSelf?: string;
  minWidth?: string | MediaProps;
}

export interface ImputSearch {
  onChange?: (value: string) => void;
  placeHolder?: string;
  round?: boolean;
  size?: number;
  fullWidth?: boolean;
  align?: string;
}

export interface AnimeContextProps {
  isMobile: boolean;
}

export interface UseWindowDimensionProps {
  width: number | undefined;
  height: number | undefined;
}

export interface LayoutProps {
  children?: React.ReactNode;
}

export interface IntegrationsTableProps {
  integrationsAlign?: boolean;
}

export interface AnimesStateProps {
  animes: { animeList: Datum[] };
}
export interface AnimesProps {
  pagination: Pagination;
  data: Datum[];
}

export interface Datum {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
  map(
    arg0: ({
      mal_id,
      url,
      images,
      trailer,
      approved,
      titles,
      title,
      title_english,
      title_japanese,
      title_synonyms,
      type,
      source,
      episodes,
      status,
      airing,
      aired,
      duration,
      rating,
      score,
      scored_by,
      rank,
      popularity,
      members,
      favorites,
      synopsis,
      background,
      season,
      year,
      broadcast,
      producers,
      licensors,
      studios,
      genres,
      explicit_genres,
      themes,
      demographics,
    }: Datum) => import('@emotion/react/jsx-runtime').JSX.Element
  ): React.ReactNode;
}

export interface Aired {
  from: Date;
  to: Date | null;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Demographic {
  mal_id: number;
  type: DemographicType;
  name: string;
  url: string;
}

export enum DemographicType {
  Anime = 'anime',
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Title {
  type: TitleType;
  title: string;
}

export enum TitleType {
  Default = 'Default',
  English = 'English',
  French = 'French',
  German = 'German',
  Japanese = 'Japanese',
  Spanish = 'Spanish',
  Synonym = 'Synonym',
}

export interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: Images;
}

export interface Images {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}
