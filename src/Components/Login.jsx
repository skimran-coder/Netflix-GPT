import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="absolute top-1/2 left-1/2 z-10 text-white transform -translate-x-1/2 -translate-y-1/2 bg-black px-16 py-8 bg-opacity-50 w-4/12 rounded-md">
      {/* Form */}
      <h1 className="font-bold text-2xl pb-8">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <form className=" flex flex-col gap-8">
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            required
            className="appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
          ></input>
        )}
        {!isSignIn && (
         <div>
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
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className=" appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
        ></input>
        <input
          type="password"
          placeholder="Password"
          required
          className="appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
        ></input>

        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="appearance-none bg-transparent border border-stone-600 w-full px-4 py-2"
          ></input>
        )}

        <button className="bg-red-600 w-full py-2 rounded-md">
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
