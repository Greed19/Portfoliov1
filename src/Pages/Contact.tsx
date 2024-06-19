
const Contact = () => {

  const onSubmit = (e:any) => {
    e.preventDefault()
  }

  return (
    <section id='/contact' className="section flex-col items-center px-20 py-10 ">
      <span className="title my-10 text-center">Contact Me</span>
      <div className="flex ">
        <form action="">
          <div className="flex sm:flex-row flex-col gap-10">
          <input 
            type="text"
            name="name"
            className="rounded img_glow h-12 w-60 p-2 border-2 border-amber-400"
            placeholder="Enter Your Name"
            />
          <input 
            type="email"  
            name="email"
            className=" rounded img_glow h-12 w-60 p-2 border-2 border-amber-400"
            placeholder="Enter Your Email"
            />
          </div>
          <textarea name="remark" placeholder='Write Your Message' className="rounded img_glow w-full h-80 my-10 p-2"></textarea>
          <button onClick={onSubmit} className="img_glow w-full h-10 bg-amber-100 rounded font-bold ">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact