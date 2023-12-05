import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Product from "./sections/Products";
import Clients from "./sections/Clients";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";
import Order from "./sections/Order";

export default function App() {
   return (
      <section className="font-inter bg-white">
         <Navbar />
         <Hero />
         <Product />
         <Order />
         <Clients />
         <section className="bg-[#FFEFEC] mt-12">
            <Newsletter />
         </section>
         <section className="bg-black ">
            <Footer />
         </section>
      </section>
   );
}
