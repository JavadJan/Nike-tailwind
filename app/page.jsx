import { CustomerReviews, Footer, Hero, Nav, PopularProducts, Services, SpecialOffers, Subscribe, SupperQuality } from "@components"

const Home = () => {
  return (
    <main className='relative'>
      <Nav />
      {/* .padding{
          sm:px-16 px-8 sm:py-24 py-12
        } */}
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />

      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SupperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16'>
        <Subscribe />
      </section>
      <section className='padding bg-black padding-t padding-x pb-8'>
        <Footer />
      </section>
    </main>

  )
}

export default Home