

import { AboutBanner, AboutDetails } from '../components/AboutComponents';

const About = () => {
  return (
    <section id='/about' className='section'>
      <div className='flex lg:flex-row md:flew-row flex-col justify-center items-center sm:gap-10 gap-5 px-20 pb-5'>
      <AboutBanner />
      <AboutDetails />
      </div>
    </section>
  )
}

export default About