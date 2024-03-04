import { Customers } from "./components/customers";
import { Details } from "./components/details";
import { Footer } from "./components/footer";
import { MoreDetails } from "./components/getchoise";
import { HeroSection } from "./components/header";
import { Input } from "./components/input";
import { NavBar } from "./components/nav";
import { Product } from "./components/product";
import { SpecialOffer } from "./components/specialOffer";

export function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <nav>
          <NavBar />
        </nav>
        <header>
          <HeroSection />
        </header>

        <article>
          <Product />
        </article>
        <article>
          <Details />
        </article>
        <article>
          <MoreDetails />
        </article>
        <article>
          <SpecialOffer />
        </article>
      </div>
      <Customers />
      <div className="container mx-auto">
        <Input />
      </div>
      <Footer/>
    </main>
  );
}
