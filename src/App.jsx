import {
  Hero,
  PopularProducts,
  Services,
  SpeacialOffer,
  Subscribe,
  SuperQuality,
  Footer,
  CustomerReviews,
} from "/src/sections/index.js";

import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="x1:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpeacialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
