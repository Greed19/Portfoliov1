import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
  AOS.init({
    easing: 'ease-in-out-quart',
    delay: 0 ,
    duration: 750

  })
  const services = [
    'HTML5',
    'CSS',
    'Javascript',    
    'React',
    'Redux',
    'Next'
  ]
  return (
    <section 
      id='/services' 
      className="section flex-col items-center gap-20 text-white py-20 h-vh px-20 w-auto h-auto ">
        <span className='title'>Skills</span>
        <div className='flex sm:flex-row flex-col gap-5 flex-wrap items-center  '>
          
        {
        services.map((item, index) => (
          <div key={`${item}${index}`} data-aos={index % 2 === 0 ? 'fade-up': 'fade-down'}
                className='cursor-pointer rounded-tr-xl rounded-bl-xl w-40 h-40 flex items-center justify-center glow border-solid border-2 border-amber-400 text-[30px] primary_text font-bold'>
                {item}
          </div>
          ))  
        }
        </div>
    </section>
  )
}

export default Services