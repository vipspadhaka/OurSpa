import Layout from "@/components/layout/Layout";
import About6 from "@/components/sections/About6";
import Banner1 from "@/components/sections/Banner3";
import Blog1 from "@/components/sections/Blog2";
import Clients1 from "@/components/sections/Clients1";
import Contact1 from "@/components/sections/Contact1";
import Gallery1 from "@/components/sections/Gallery1";
import Instagram1 from "@/components/sections/Instagram1";
import Marquee1 from "@/components/sections/Marquee1";
import Pricing1 from "@/components/sections/Pricing1";
import Services1 from "@/components/sections/Services1";
import Team2 from "@/components/sections/Team2";
import Testimonial1 from "@/components/sections/Testimonial1";
import Video1 from "@/components/sections/Video1";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Banner1 />
        <Clients1 />
        <About6 />
        <Services1 />
        <Marquee1 />
        <Video1 />
        <Gallery1 />
        <Pricing1 />
        <Contact1 />
        <Testimonial1 />
        <Team2 />
        <Instagram1 />
        <Blog1 />
      </Layout>
    </>
  );
}
