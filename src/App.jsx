import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Product from "./sections/Products";
import Clients from "./sections/Clients";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";

export default function App() {
   return (
      <section className="font-inter">
         <Navbar />
         <Hero />
         <Product />
         <Clients />
         <Newsletter />
         <Footer />
      </section>
   );
}
