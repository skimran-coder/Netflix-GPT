import { useDispatch } from "react-redux";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_IMG_URL } from "../Constant";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            uid: uid,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return(
  <>
  <div className="relative  font-netflixSans">
        <div className="h-full relative">
          <div className="w-full h-full  bg-gradient-to-tr from-black absolute left-0 right-0 top-0 bottom-0"></div>
          <img src={BG_IMG_URL} />
        </div>
      </div>
   <Login />;
  </>)
};

export default Body;
