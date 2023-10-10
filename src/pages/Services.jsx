/* eslint-disable react/jsx-no-undef */
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;