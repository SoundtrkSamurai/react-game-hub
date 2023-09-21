import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { FetchResponse, Game, GameQuery } from "../types";

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1}) => {
    return apiClient.getAll({
      params: { 
        genres: gameQuery.genreId, 
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      }
    })
  },
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime: ms('24h')
});

export default useGames;