import { useEffect, useState } from "react";

const useCardTopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setTopRatedMovies(data.results));
  }, []);

  return { topRatedMovies };
};

export default useCardTopRated;
