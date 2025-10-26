import { useEffect, useState } from "react";

const useCardUpComing = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setUpComingMovies(data.results));
  }, []);

  return { upComingMovies };
};

export default useCardUpComing;
