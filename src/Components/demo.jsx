const SectionOne = () =>{
  return (
    <div className="bg-black  flex flex-wrap text-white justify-between  border-b-8 border-stone-800">

        <div className="flex flex-col  justify-center gap-8 sm:w-1/2">
          <h2 className="text-5xl font-extrabold ">Enjoy on your TV</h2>
          <p className="w-3/5 text-2xl">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </p>
        </div>

        <div className=" ">
          <div className=" z-20">
          <img src={TV_PNG_URL} alt="TV display" >
          </img>
          </div >
          <div className=" top-24 right-52 z-10">
          <video src={DEMO_VIDEO_URL}  autoPlay muted playsInline loop> 
          </video>
          </div>
        </div>
        
    </div>
  )
}