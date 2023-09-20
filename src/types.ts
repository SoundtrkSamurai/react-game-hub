 export type Platform = {
  id: number;
  name: string;
  slug: string;
 }

 export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export type Genre = {
  id: number;
  name: string;
  image_background: string;
}

export type FetchResponse<T> = {
  count: number;
  results: T[];
}

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}