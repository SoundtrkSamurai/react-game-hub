import { Game, GameQuery, Genre, Platform } from "../types";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>('/games', { 
    params: { 
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }}, 
    [gameQuery]);
}

export default useGames;