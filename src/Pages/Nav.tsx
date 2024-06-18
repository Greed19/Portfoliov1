import { useState } from 'react'
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci';
import logo from '../assets/logo.png'

const Navigations = ({hover = false}) => {

  const pagesArr = [
    {page:'Home',path:'/home'},
    {page:'About',path:'/about'},
    {page:'Services',path:'/services'},
    {page:'Projects',path:'/projects'},
    {page:'Contact',path:'/contact'},
]

const scrollProps = {
  spy:true,
  smooth:true
}
const mobile = 'px-40 border-slate-900 z-50'

  return(
    <>
    {
    pagesArr.map((item,index) => (
      <Link
        key={`${index}-${item.page}`}
        {...scrollProps}
        to={item?.path}
        className={`cursor-pointer my-4 py-4 ${hover ? mobile : 'px-4' } hover:bg-slate-800 hover:rounded `} >
          <li 
          className='
          hover:text-amber-400 
          transition 
          border-b-2 
          border-slate-900 
          hover:border-amber-400'>{item?.page}
          </li>
      </Link>
        ))
    }
    </>
  
  )
}

const Nav = () => {

  const [menuSwitch, setMenuSwitch] = useState<boolean>(false);
  
  return (
    <>
    <nav className='flex justify-between items-center text-white px-20 py-5  relative'>
        <span className='text-3x1 font-bold'>
          <img src={logo} height={100} width={100} alt="" />
        </span>
      <ul className='lg:flex md:flex items-center gap-10 hidden'>
        <Navigations/>
      </ul>
      <div onClick={ () => setMenuSwitch(prev => !prev)}  className='block sm:hidden cursor-pointer'>
        {
          menuSwitch ? <FaTimes/> :  <CiMenuFries /> 
        }
      </div>
    
    </nav>
    <div
    className='block sm:hidden  text-white z-50 relative'
    >
    {
      menuSwitch && 
        <ul className='flex flex-1 flex-col items-center w-screen absolute top-0 right-0 bg-slate-900'>
          <Navigations hover />
        </ul>
      }
    </div>
    </>
  )
}   
export default Nav