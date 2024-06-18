import { HomeBanner , HomeDetails } from "../components/HomeComponents"

const Home = () => {
  return (
    <section id='/home' className="section" >
        <div className="flex lg:flex-row md:flex-row justify-center sm:gap-20 gap-5 items-center flex-col px-20 pb-5">
            <HomeDetails />
            <div className="sm:order-last order-first">
            <HomeBanner />
            </div>
        </div>
    </section>
  )
}

export default Home