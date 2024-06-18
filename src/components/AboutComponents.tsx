import img from '../assets/home.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
import resumePdf from '../assets/Aldrie.pdf'
export const AboutBanner = () => {

  AOS.init({
    easing: 'ease-in-quart',
    delay:0,
    duration:750
  })

  return (
    <div data-aos='fade-right' className='flex w-44 h-44'>
      <img className='rounded img_glow' src={img} alt="about_banner" />
    </div>
  )
}

export const AboutDetails = () => {
  AOS.init({
    easing: 'ease-in-quart',
    delay:0,
    duration:750
  })

  return (
    <div className='flex flex-col items-center justify-center sm:items-start mt-10 text-white gap-10 sm:w-1/2 w-auto'>
      <span data-aos='fade-up' className='title'>About Me</span>
      <span data-aos='fade-left' className='text-justify'>A web developer with a knack for creating intuitive and dynamic websites. With a background in frontend developer, I bring a unique blend of design sensibility and technical expertise to my work. I specialize in front-end technologies like JavaScript, HTML, and ReactJS, ensuring each site I develop is not only visually appealing but also highly functional. When I’m not coding, you’ll find me reading light novels and playing mobile games. Take a look around my portfolio to get a sense of my style and approach to web development. Let’s connect and make the web a more beautiful place together!</span>
      <button data-aos='fade-left' className='rounded glow w-fit border-solid border-2 border-amber-400 p-3' >
        <a className="button" href={resumePdf} download="Resume.pdf">
          Resume
        </a>
      </button>
    </div>
  )
}