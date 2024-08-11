import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    let isMount = true;
    const fetchJoke = async () => {
      try {
        const response = await fetch(url);
        const tempData = await response.json();
        if(isMount) {
          setJoke(tempData.value);
        }
      } catch (error) {
        setJoke("No Joke Found");
      }
    }
    fetchJoke();

    return () => {
      isMount = false;
    }
  } ,[url]);

  return joke;
}
