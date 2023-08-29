import { Genre } from "../types";
import useData from "./useData";

const useGenres = (selectedGenre: Genre | null) => useData<Genre>('/genres');

export default useGenres;