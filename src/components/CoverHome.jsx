import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export default function CoverHome() {
  const [coverMovies, setCoverMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setCoverMovies(data.results));
  }, []);
  return (
    <>
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
    </>
  );
}
