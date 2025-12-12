import {useEffect, useState} from "react";

type FetchDataResult = Record<string, unknown>;
type ErrorType = string | null;

export const useFetchData = (url: string) => {
  const [data, setData] = useState<FetchDataResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<ErrorType>(null);

  const fetchData = async () => {
    if (!url) return;

    setIsLoading(true);
    setIsError(null);

    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const json = await res.json();
      setData(json);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setIsError(err.message || "Unknown error");
      } else {
        setIsError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    isError
  };
};