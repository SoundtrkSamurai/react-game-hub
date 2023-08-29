import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game, FetchGamesResponse } from "../types";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);8

  useEffect(() => {
    const controller = new AbortController();
    
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })
    
    return () => controller.abort();
  }, []);

  return {
    games, error, isLoading
  }
};

export default useGames;