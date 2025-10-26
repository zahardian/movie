import { useEffect, useState } from "react";

const useCoverHome = () => {
  const [coverMovies, setCoverMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setCoverMovies(data.results));
  }, []);

  return { coverMovies };
};

export default useCoverHome;
