import { Carousel } from "react-responsive-carousel";
import useCoverHome from "../hooks/useCoverHome";

export default function CoverHome() {
  const { coverMovies } = useCoverHome();

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
