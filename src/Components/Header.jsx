import { signOut } from "firebase/auth";
import Logo from "../assets/Netflix_Logo_PMS.png";
import {
  AVATAR_IMG_URL,
  Bell_Icon_SVG,
  BG_IMG_URL,
  Search_Icon_SVG,
} from "../Constant";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="font-netflixSans">
      <div className="absolute flex left-28 z-10 text-white">
        <img src={Logo} alt="Logo" className="w-44 "></img>

        {user && (
          <ul className="flex gap-4 pt-6 pl-2 text-lg">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        )}
      </div>

      {user && (
        <div className="absolute flex items-center gap-2 top-4 right-28 z-10 text-white">
          <div className="w-12 h-12 pt-2">{Search_Icon_SVG}</div>
          <div className="w-12 h-12 pt-2">{Bell_Icon_SVG}</div>
          <img alt="avatar" src={AVATAR_IMG_URL} className="w-12 h-12" />
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}

      <div className="relative  font-netflixSans">
        <div className="h-full relative">
          <div className="w-full h-full  bg-gradient-to-tr from-black absolute left-0 right-0 top-0 bottom-0"></div>
          <img src={BG_IMG_URL} />
        </div>
      </div>
    </div>
  );
};

export default Header;
