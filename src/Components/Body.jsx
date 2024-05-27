import Login from "./Login";

const Body = () => {
  return (

    <div className="relative h-screen">
      <div className=" relative">
        <div className="w-full h-full bg-gradient-to-tr from-black absolute left-0 right-0 top-0 bottom-0"></div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
      </div>

      <Login/>
    </div>
  );
};

export default Body;
