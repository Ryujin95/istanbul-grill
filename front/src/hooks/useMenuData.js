import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export function useMenuData(endpoint) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

    if (!apiUrl) {
      setError("Le service du menu n’est pas configuré.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get(`${apiUrl}${endpoint}`);
      setData(response.data);
    } catch {
      setError("Le menu est momentanément indisponible. Réessaie dans un instant.");
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    load();
  }, [load]);

  return { data, error, isLoading, reload: load };
}
