import Testimonials from "./components/Testimonials";
import Landing_page from "./components/Landing_page";
import Minterest from "./components/Minterest";
import EditorialLayout from "./components/EditorialLayout";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Landing_page/>
      <Testimonials/>
      <Minterest/>
      <EditorialLayout/>
      <Footer/>
    </>
  );
}
