import { useEffect, useState } from "react"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import Nav from "./Pages/Nav"
import Projects from "./Pages/Projects"
import Services from "./Pages/Services"
import { BallTriangle } from "react-loader-spinner"
import bgMsc from './assets/bgMusic.mp3'

function App() {
  const [loading,setLoading] = useState(true);
  const bgMusic = new Audio(bgMsc)
  const gotoMain = () => {
    setLoading(false)
    bgMusic.loop = true;
    bgMusic.play()
  }
  return (
    <>
    {
      loading 
      ? <div className="bg-slate-900 h-[100vh] flex flex-col justify-center items-center" >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#fbbf24"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true} />
          <button onClick={gotoMain} className="flex justify-center items-center mt-10 h-10 w-fit primary_text border-2 border-amber-400 rounded p-4">Click to Enter</button>
      </div>
      : <div className='bg-slate-900 overflow-hidden'>
          <Nav/>
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
    }
    </>
  )
}

export default App
