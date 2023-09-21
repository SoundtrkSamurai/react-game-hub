import APIClient from "../services/api-client";
import { FetchResponse, Platform } from "../types";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>('platforms/lists/parents');

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 3600 * 1000, // 24 hours,
  initialData: platforms
});

export default usePlatforms;