import Container from "../../../Shared/Contanier/Container";
//import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Subscribe = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };
  return (
    <section className="py-2">
      <Container>
        <div className="flex flex-col md:flex-row flex-wrap gap-3 items-center md:justify-around">
          <img
            src={"https://logodix.com/logo/652288.jpg"}
            className="w-[216px] h-[149px] "
            alt="company 1"
          />
          <img
            src={"https://www.carlogos.org/logo/Pierce-Arrow-logo-640x416.jpg"}
            className="w-[216px] h-[149px]"
            alt="company 2"
          />
          <img
            src={"https://www.car-brand-names.com/wp-content/uploads/2016/01/smart-logo-3.jpg"}
            className="w-[216px] h-[149px]"
            alt="company 3"
          />
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJQ656zCMlbwVO20l7CVz8PWyrJov5jB_EAXzzM5lGiN-c2f9SUNgGi6J0HeANKAqYvQ&usqp=CAU"}
            className="w-[216px] h-[149px]"
            alt="company 4"
          />
          <img
            src={"https://i.pinimg.com/1200x/d4/b4/e6/d4b4e69c0f9e9b5d652f2190be8448cc.jpg"}
            className="w-[216px] h-[149px]"
            alt="company 5"
          />
        

        </div>
      
      </Container>
    </section>
  );
};

export default Subscribe;
