import AboutUs from "./components/sections/AboutUs";
import MainVisual from "./components/sections/MainVisual";
import WhyKerberos from "./components/sections/WhyKerberos";
import Portfolio from "./components/sections/Portfolio";
import Partners from "./components/sections/Partners";
import Contact from "./components/sections/Contact";
export default function Home() {
  return (
    <main className="w-full">
      <MainVisual />
      <AboutUs />
      <WhyKerberos />
      <Portfolio />
      <Partners />
      <Contact />
    </main>
  );
}
