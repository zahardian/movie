import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardTopRated from "../components/CardTopRated";

const TopRated = () => {
  return (
    <div className="pt-20">
      <h1 className="uppercase text-xl font-bold text-center my-10">
        Top Rated
      </h1>
      <CardTopRated />
    </div>
  );
};

export default TopRated;
