import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.png';
import AOS from 'aos';
import 'aos/dist/aos.css'



const Projects = () => {

  AOS.init({
    easing: 'ease-in-out-quart',
    delay:0,
    duration:750
  })

  const arrProj = [
    {img:pro1},
    {img:pro2},
    {img:pro3},
    {img:pro4},
  ]

  return (
    <section id='/projects' className='section flex-col  items-center gap-20 px-20 pb-20'>
      <span className='title'>Projects</span>
      <div className='gap-10 flex flex-col sm:flex-row  justify-center items-center  w-screen px-20'>
        {
          arrProj.map((item,index) => (
            <div data-aos='fade-up' key={`project-${index+1}`} className='cursor-pointer rounded w-60 sm:w-1/4 h-40 flex items-center justify-center glow border-solid border-2 border-amber-400 '>
              <img src={item.img} alt={`project-${index+1}`} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects