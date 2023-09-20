import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery } from "../types";
import apiClient from "../services/api-client";

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => {
    return apiClient
      .get<FetchResponse<Game>>('/games', {
        params: { 
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
      .then(res => res.data)
  }
})

export default useGames;