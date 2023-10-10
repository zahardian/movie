import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardPopular from "../components/CardPopular";
import CoverHome from "../components/CoverHome";

const Home = () => {
  return (
    <>
      <div className="pt-16">
        <CoverHome />
        <h1 className="uppercase text-xl font-bold text-center my-20">
          Popular
        </h1>
        <CardPopular />
      </div>
    </>
  );
};

export default Home;
