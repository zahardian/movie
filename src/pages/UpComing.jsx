import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardUpComing from "../components/CardUpComing";

const UpComing = () => {
  return (
    <div className="pt-20">
      <h1 className="uppercase text-xl font-bold text-center my-10">
        UpComing
      </h1>
      <CardUpComing />
    </div>
  );
};

export default UpComing;
