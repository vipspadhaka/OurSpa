import Link from "next/link";
import Services1 from "@/components/sections/Services7";
import Services3 from "@/components/sections/Services3";
import Services5 from "@/components/sections/Services2";
const Services = () => {
  return (
    <>
      <section className="services-section pt-100">
        <Services1 />
        <Services3 />
        {/* <Services5 /> */}
        <div className="service1-pattrn1 bounce-y"></div>
      </section>
    </>
  );
};
export default Services;
