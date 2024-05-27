import Logo from "../assets/Netflix_Logo_PMS.png"

const Header = () => {
  
  return (
    <div className="absolute left-28 z-10 ">
      <img src={Logo} alt="Logo" className="w-44 "></img>
    </div>
  );
};

export default Header;
