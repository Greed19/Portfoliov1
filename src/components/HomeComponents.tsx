import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import AOS from 'aos'
import 'aos/dist/aos.css';
import img from '../assets/home.jpg'

export const HomeBanner = () => {
  AOS.init({
    easing: 'ease-in-quart',
    delay:0,
    duration:750
  })
  return (
    <div data-aos='fade-left' className='flex w-48 h-48'>
        <img className='rounded-full img_glow' src={img}  alt="home_banner" />
    </div>
  )
}

export const HomeDetails = () => {

  const Icons = [
    {icon: <AiFillGithub/>, href:''},
    {icon: <FaLinkedinIn/>, href:''},
    {icon: <FaInstagram/>, href:''},
    {icon: <FiTwitter/>, href:''}
  ]

   AOS.init({
    easing: 'ease-in-quart',
    delay:0,
    duration:750
  })

  return (
    <div className="flex flex-col text-white px-10 sm:w-1/2 w-auto">
        <h2 data-aos='fade-down' className="text-[52px] my-10">Welcome to <span className="title">My Portfolio</span></h2>
        <div data-aos='fade-right' className="flex text-justify w-auto">
        Hello and welcome to my portfolio! I’m Aldrie Antonio, a passionate web developer dedicated to building seamless, user-centric experiences. Whether it’s crafting responsive layouts or bringing functionality to life with JavaScript, I love turning ideas into reality. Explore my portfolio to see the projects that showcase my journey as a developer. Let’s create something amazing together!
        </div>
        <div data-aos='fade-right' className="flex flex-row gap-5 my-5 primary_text ">
          {
            Icons.map((icon,index) => (
              <a key={`${icon.toString()}${index}`} href={icon?.href} className="rounded-full glow p-2">
                {icon.icon}
              </a>
            ))
          }
        </div>
    </div>
  )
}