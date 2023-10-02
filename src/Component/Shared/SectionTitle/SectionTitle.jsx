import { Fade } from "react-awesome-reveal";


const SectionTitle = ({ heading, subHeading }) => {

  return (
    <div
      className= "mx-auto text-center mt-4 mb-8 md:mt-8 md:mb-16 black-text jost-font"
    >
      <h3 className="text-4xl   text-blue-600 uppercase mb-4 font-semibold">
        {heading}
      </h3>
      <Fade direction="down" >
        <p className="md:text-xl mb-4">{subHeading}</p>
      </Fade>
    </div>
  );
};

export default SectionTitle;