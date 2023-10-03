import { Link } from "react-router-dom";
import "./ParallaxMessage.css";

const ParallaxMessage = () => {
  return (
    <section className="pt-16 md:pt-28">
      <div className="parallax-bgg bg-fixed py-48 px-5 md:px-12 lg:px-20">
        <div className="sm:p-3 md:p-12 xl:w-2/3 mx-auto">
          <h2 className="text-white text-3xl md:text-4xl text-center leading-[40px] md:leading-[60px] bg-black bg-opacity-70 rounded-tl-[50px] rounded-br-[50px]">
            "Find your perfect getaway and book your dream Car on CarHub!"
          </h2>

          <div className="card-actions flex justify-center mt-4">
            <Link to="/cars">
              <button className="btn bg-blue-400 text-white">Rent Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxMessage;
