import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const useJsonPlaceholderApi = <T,>(
  url: string | URL,
  options?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: AxiosResponse<T> = await axios(
        new URL(url, BASE_URL).toString(),
        options
      );
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error);
      } else {
        console.error(error);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
};
