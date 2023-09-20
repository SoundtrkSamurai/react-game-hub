import apiClient from "../services/api-client";
import { FetchResponse, Platform } from "../types";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => {
    return apiClient
      .get<FetchResponse<Platform>>('/platforms/lists/parents')
      .then((res) => res.data)
  },
  staleTime: 24 * 3600 * 1000, // 24 hours,
  initialData: { count: platforms.length, results: platforms }
});

export default usePlatforms;