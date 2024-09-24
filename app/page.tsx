import Banner from "@/components/Screen/Banner";
import AboutUs from "@/components/Screen/About";
import Services from "@/components/Screen/Services";
import Iframe from "@/components/ui/iframe";
import Footer from "@/components/Screen/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <h2 className="my-12 text-4xl text-center font-bold" id="contact-us">
        Our Location
      </h2>
      <div className="container mx-auto mb-12">
        <Iframe />
      </div>
      <Footer />
    </div>
  );
}
