import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [coverMovies, setCoverMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setCoverMovies(data.results));
  }, []);

  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="pt-16">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {coverMovies.map((cover) => (
            <div
              key={cover.id}
              className="bg-gradient-to-b from-transparent to-black"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  cover && cover.backdrop_path
                }`}
                className="object-cover h-[550px] md:h-[650px] mix-blend-overlay"
              />
              <div className="absolute top-60 text-left md:px-20 px-5 space-y-5">
                <p className="font-bold text-4xl md:text-5xl">{cover.title}</p>
                <p className="text-xl font-thin">{cover.release_date}</p>
                <p className="text-sm md:w-1/2">{cover.overview}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <h1 className="uppercase text-xl font-bold text-center my-20">
          Popular
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 min-h-screen items-center justify-center gap-2 lg:mx-20 md:mx-20 mx-5 mb-20">
          {popularMovies.map((popular) => (
            <Link key={popular.id} to={`/details/${popular.id}`}>
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-md">
                <div className="h-60 md:h-96 w-full">
                  <img
                    className="h-full w-full object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform duration-700"
                    src={`https://image.tmdb.org/t/p/original/${
                      popular && popular.poster_path
                    }`}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 gap-1 px-2 py-1 flex flex-col justify-end text-left translate-y-[200%] group-hover:translate-y-0 transition-all duration-700">
                  <h1 className="text-xl font-bold">{popular.title}</h1>
                  <p className="text-sm font-thin">{popular.release_date}</p>
                  <p className="text-sm font-thin h-20">{popular.overview}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
