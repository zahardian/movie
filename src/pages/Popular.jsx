import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardPopular from "../components/CardPopular";

const Popular = () => {
  return (
    <div className="pt-20">
      <h1 className="uppercase text-xl font-bold text-center my-10">Popular</h1>
      <CardPopular />
    </div>
  );
};

export default Popular;
