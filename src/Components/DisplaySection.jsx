import { DEMO_POSTER_URL, DEMO_VIDEO_URL, MOBILE_PNG_URL, TV_PNG_URL } from "../Constant"

function DisplaySection() {

  const SectionOne = () =>{
    return (
      <div className="h-3/4 overflow-hidden text-white flex flex-wrap justify-around items-center bg-black">

          <div className="">
            <h2 className="">Enjoy on your TV</h2>
            <p className="">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </p>
          </div>

          <div className="overflow-hidden relative w-1/2 h-full">
           
            <img src={TV_PNG_URL} alt="TV display" className=" z-20 absolute left-2">
            </img>
            <video src={DEMO_VIDEO_URL}  autoPlay muted playsInline loop className="  absolute right-52 top-24 z-10 w-[75%]  left-2"> 
            </video>
            

            
          </div>
          
      </div>
    )
  }

  const SectionTwo = () => {
    return (
      <div className="bg-black h-3/4 flex flex-wrap w-full text-white justify-between items-center relative border-b-8 border-stone-800">
          <div className="w-1/2 absolute left-8 top-0 right-0">
            <img src={MOBILE_PNG_URL}>
            </img>
          </div>
          <div className="w-80 h-28 rounded-lg bg-black border border-white border-opacity-50 absolute bottom-24 left-48 z-10 flex items-center">
            <img src={DEMO_POSTER_URL} className="h-3/4  object-fit pl-6">
            </img>
            <div>
            <h4 className="pl-4 font-bold">Stranger Things</h4>
            <p className="text-blue-500 pl-4">Downloading...</p>
            </div>
            
          </div>

          <div className="flex flex-col h-full justify-center gap-8 pr-32 w-1/2 absolute right-8">
            <h2 className="text-5xl font-extrabold">Download your shows to watch offline</h2>
            <p className="w-3/4 text-2xl">
            Save your favourites easily and always have something to watch.
            </p>
          </div>
      </div>
    )
  }

  return (
    <div className="h-screen ">
      <SectionOne />
      {/* <SectionTwo /> */}
    </div>
  )
}

export default DisplaySection