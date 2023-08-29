import { Game, Genre, Platform } from "../types";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  return useData<Game>('/games', { 
    params: { 
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id 
    }}, 
    [selectedGenre?.id, selectedPlatform?.id]);
}

export default useGames;