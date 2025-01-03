import { NavBar } from "./components/navbar";
import { HeroSection } from "./components/hero";
import { Sustain } from "./components/sustain";
import { Footer } from "./components/footer";
import { Product } from "./components/product";
import Desk from "./components/desk";

export default function Home() {
  return (
   <div>
    <NavBar />
      <HeroSection />
      <Sustain />
      <Product />
      <Desk />
      <Footer />
      
   </div>
  
  );
}
