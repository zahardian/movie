import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const UpComing = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setUpComingMovies(data.results));
  }, []);

  return (
    <div className="pt-20">
      <h1 className="uppercase text-xl font-bold text-center my-10">
        UpComing
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 min-h-screen items-center justify-center gap-2 lg:mx-20 md:mx-20 mx-5 mb-20">
        {upComingMovies.map((upComing) => (
          <Link key={upComing.id} to={`/details/${upComing.id}`}>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-md">
              <div className="h-60 md:h-96 w-full">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700"
                  src={`https://image.tmdb.org/t/p/original/${
                    upComing && upComing.poster_path
                  }`}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 gap-1 px-2 py-1 flex flex-col justify-end text-left translate-y-[200%] group-hover:-translate-y-0 transition-all duration-700">
                <h1 className="text-xl font-bold">{upComing.title}</h1>
                <p className="text-sm font-thin">{upComing.release_date}</p>
                <p className="text-sm font-thin h-20">{upComing.overview}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpComing;
