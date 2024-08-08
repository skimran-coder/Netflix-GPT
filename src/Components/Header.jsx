import { signOut } from "firebase/auth";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { AVATAR_IMG_URL, Bell_Icon_SVG, DELETE_ICON_URL, FAVORITE_ICON_URL, HOME_ICON_URL, MENU_ICON_URL, MOVIE_ICON_URL, POPULAR_ICON_URL, Search_Icon_SVG, TV_ICON_URL } from "../Constant";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsSignIn } from "../utils/userSlice";
import BURGER_ICON from "../assets/icons8-hamburger-menu-480.svg"
import { useState } from "react";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const isSignIn = useSelector((state) => state.user.isSignIn);
  const dispatch = useDispatch()
  const [isSideBar, setIsSideBar] = useState(false)

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="font-netflixSans w-full absolute flex justify-between ">
      <div className="  flex justify-start pl-2 sm:pl-28 z-20 text-white">

      

        <div className="z-10"> {
          isSideBar ? (
          <div className="flex-col justify-between">
            <img width="50" height="50" src={DELETE_ICON_URL} alt="delete-sign--v1" className={`lg:hidden pl-2 flex w-12 mt-4 absolute top-0 left-2 ${!user && "hidden"}`} onClick={() => setIsSideBar(false)}/>
            </div>)
          :
          (
          <img width="50" height="50" src={MENU_ICON_URL} alt="menu--v1" className={`lg:hidden pl-2 flex w-12 mt-4 absolute top-0 left-2 ${!user && "hidden"}`} onClick={() => setIsSideBar(true)}/>)
          } 
          </div>
        
        <div className={` sm:pl-0 ml-2 ${!user ? "pl-1" : "pl-20"}`}>
        <img src={Logo} alt="Logo" className="w-44 "></img>
        </div>

        {user && (
          <ul className={`gap-4 text-lg transition-all  ${isSideBar ? " pt-20 absolute top-0 flex -left-2 flex-col bg-red-800 w-20 pl-4 pb-2" : "  hidden  " }`}>
            <hr className="left-0 top-16 w-full absolute  bg-red-500 "></hr>
            <img width="50" height="50" className="" src={HOME_ICON_URL} alt="home--v1"/>
            <img width="50" height="50" src={TV_ICON_URL} alt="tv-show"/>
            <img width="50" height="50" src={MOVIE_ICON_URL} alt="movie--v1"/>
            <img width="50" height="50" src={POPULAR_ICON_URL} alt="popular-topic"/>
            <img width="50" height="50" src={FAVORITE_ICON_URL} alt="hearts--v1"/>
          </ul>
        )}

        {
          user && (
            <ul className={`gap-4  text-lg transition-all  ${!isSideBar ? "pt-6 hidden lg:flex" : "  hidden " }`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
          )
        }

      </div>

      {user ? (
        <div className="   gap-4 flex items-center pt-4 pr-10 z-10 text-white">
          <div className="w-12 h-12 pt-2 md:flex hidden">{Search_Icon_SVG}</div>
          <div className="w-12 h-12 pt-2 md:flex hidden">{Bell_Icon_SVG}</div>
          <img alt="avatar" src={AVATAR_IMG_URL} className="w-12 h-12 flex" />
          <button className="bg-red-600 w-24 px-4 py-2 rounded-sm md:flex hidden" onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <div className=" pr-2 sm:pr-20 pt-4 z-20 text-white">
          <button className="bg-red-600 w-24 px-4 py-2 rounded-sm "
          onClick={() => dispatch(toggleIsSignIn())}>
            {!isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
