import { create } from 'zustand';
import { GameQuery } from '../types';

type GameQueryStoreState = {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatforId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}
const useGameQueryStore = create<GameQueryStoreState>(set => ({
  gameQuery: ({} as GameQuery),
  setSearchText: (searchText) => {
    set(store => ({ gameQuery: {...store.gameQuery, searchText} }))
  },
  setGenreId: (genreId) => {
    set(store => ({ gameQuery: {...store.gameQuery, genreId } }))
  },
  setPlatforId: (platformId) => {
    set(store => ({ gameQuery: {...store.gameQuery, platformId } }))
  },
  setSortOrder: (sortOrder) => {
    set(store => ({ gameQuery: {...store.gameQuery, sortOrder } }))
  },
}));

export default useGameQueryStore;