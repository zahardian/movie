import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div>
      <img
        className="h-[515px] w-[1250px] object-cover mx-auto rounded"
        src={`https://image.tmdb.org/t/p/original${
          currentMovieDetail ? currentMovieDetail.backdrop_path : ""
        }`}
      />
      <div className="absolute top-80 md:top-72 md:flex mx-4 md:mx-10 lg:mx-44 gap-5">
        <img
          className="md:w-72 md:h-96 w-60 h-72 rounded-xl object-cover"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.poster_path : ""
          }`}
        />
        <div className="w-full pt-10 md:pt-0">
          <div className="text-3xl md:text-4xl font-bold">
            {currentMovieDetail ? currentMovieDetail.original_title : ""}
          </div>
          <div className="text-sm">
            {currentMovieDetail ? currentMovieDetail.tagline : ""}
          </div>
          <div className="flex">
            <div className="text-sm">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}
            </div>
            <FontAwesomeIcon icon={faStar} />
            <div className="text-sm">
              {currentMovieDetail
                ? "(" + currentMovieDetail.vote_count + ") votes"
                : ""}
            </div>
          </div>
          <div className="text-sm">
            {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
          </div>
          <div className="text-sm">
            {currentMovieDetail
              ? "Release date: " + currentMovieDetail.release_date
              : ""}
          </div>
          <div className="mb-10 mt-5">
            {currentMovieDetail && currentMovieDetail.genres
              ? currentMovieDetail.genres.map((genre) => (
                  <>
                    <span
                      className="border-2 rounded-full p-2 mr-2 text-sm"
                      id={genre.id}
                    >
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </div>
          <p className="text-xl font-bold">Synopsis</p>
          <div className="text-sm">
            {currentMovieDetail ? currentMovieDetail.overview : ""}
          </div>
          <div className="flex gap-5 md:gap-10 mt-10">
            {currentMovieDetail && currentMovieDetail.homepage && (
              <Link
                className="bg-red-600 text-black font-bold text-sm rounded-full py-2 px-10 w-32 md:w-44"
                to={currentMovieDetail.homepage}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="flex gap-5 items-center justify-center">
                    Homepage <i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </Link>
            )}
            {currentMovieDetail && currentMovieDetail.imdb_id && (
              <Link
                className="bg-yellow-400 text-black font-bold text-sm rounded-full py-2 px-10 w-32 md:w-44"
                to={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="flex gap-5 items-center justify-center">
                    IMDb<i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
