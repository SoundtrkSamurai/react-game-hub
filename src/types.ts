 export interface Platform {
  id: number;
  name: string;
  slug: string;
 }

 export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}