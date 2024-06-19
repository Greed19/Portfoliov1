import { FooterComponents } from "../components/FooterComponents"
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  
  const icons = [
    <AiFillGithub/>,<FaLinkedinIn/>,<FaInstagram/>,<FiTwitter/>
  ]

  const footerData = [
    {
      title:'logo',
      desc: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore veritatis dolores aspernatur aperiam beatae id repudiandae aliquid quo non.']
    },
    {
      title:'services',
      desc: ['web Design','Web Development','SEO','E-commerce']
    },
    {
      title:'contact',
      desc: ['Email: aldriep.antonio@gmail.com','Phone:+6390 6885 0960']
    },
    {
      title:'follow me',
      desc: [<div className="flex gap-5 text-white">{icons.map((icon,index) => <span key={`${index}footer_icon`}>{icon}</span>)}</div>]
    },
  ]

  return (
    <footer className="section sm:flex-row flex-col justify-start items-start py-20 px-20 text-white">
      {
      footerData.map((item,index) => (
        <FooterComponents key={`footer_component${index}`}  props={item} />
      ))
      }
    </footer>
  )
}

export default Footer