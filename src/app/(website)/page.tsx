import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Testimony from "./Testimony";

export default function Home() {
  return (
    <div className="mx-auto w-full text-center">
      <Hero />
      <AboutMe />
      <Services />
      <Testimony />
      <Banner />
      <Contact />
    </div>
  );
}
