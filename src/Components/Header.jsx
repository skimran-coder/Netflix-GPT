import { signOut } from "firebase/auth";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { AVATAR_IMG_URL, Bell_Icon_SVG, Search_Icon_SVG } from "../Constant";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsSignIn } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user)
  const isSignIn = useSelector((state) => state.user.isSignIn);
  const dispatch = useDispatch()

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

      {user ? (
        <div className="absolute flex items-center gap-2 top-4 right-28 z-10 text-white">
          <div className="w-12 h-12 pt-2">{Search_Icon_SVG}</div>
          <div className="w-12 h-12 pt-2">{Bell_Icon_SVG}</div>
          <img alt="avatar" src={AVATAR_IMG_URL} className="w-12 h-12" />
          <button className="bg-red-600 w-24 px-4 py-2 rounded-md " onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <div className="absolute right-20 top-6 z-10 text-white bg-red-600">
          <button className="bg-red-600 w-24 px-4 py-2 rounded-lg "
          onClick={() => dispatch(toggleIsSignIn())}>
            {!isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
