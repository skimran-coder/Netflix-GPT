import { useRef, useState } from "react";
import checkValidInfo from "../utils/checkValidInfo";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    const validationResult = checkValidInfo(
      email,
      password,
      name,
      confirmPassword,
      setErrorMessage,
      isSignIn
    );
    if (!validationResult) return;

    if (!isSignIn) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;
          console.log(errCode);
          setErrorMessage(errMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;
          console.log(errCode);
          setErrorMessage(errMessage);
        });
    }
  };

  return (
    <div className="absolute font-netflixSans top-1/2 left-1/2 z-10 text-white transform -translate-x-1/2 -translate-y-1/2 bg-black px-16 py-8 bg-opacity-50 w-4/12 rounded-md h-fit min-h-3/5">
      {/* Form */}
      <h1 className="font-bold text-2xl pb-8">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <form
        className=" flex flex-col gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            required
            className="appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
          ></input>
        )}
        {/* {!isSignIn && (
          <div className="hidden">
            <label htmlFor="age">Date of birth?</label>
            <input
              type="date"
              placeholder="Your Age"
              name="age"
              id="age"
              required
              className="mt-2 appearance-none bg-transparent border border-stone-600 w-full px-4 py-2 calendar-picker-indicator"
            ></input>
          </div>
        )} */}
        <input
          type="email"
          placeholder="Email Address"
          ref={email}
          required
          className=" appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
        ></input>
        <input
          type="password"
          placeholder="Password"
          ref={password}
          required
          className="appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
        ></input>

        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPassword}
            required
            className="appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
          ></input>
        )}

        <p
          className={`text-red-600 text-lg ${
            errorMessage ? "visible" : "hidden"
          }`}
        >
          {errorMessage}
        </p>

        <button
          className="bg-red-600 w-full py-2 rounded-md"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p>
          {isSignIn ? "New to Netflix?" : "Already a user?"}{" "}
          <span
            className="font-bold cursor-pointer hover:underline"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign up now." : "Sign in."}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
