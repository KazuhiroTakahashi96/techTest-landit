import LogoLandit from "../assets/images/logo-landit.png";

const Header = () => {
  return (
    <header className="py-2.5 pl-[2px] h-[74px]">
      <img src={LogoLandit} alt="logo" className="h-[60px]" />
    </header>
  );
};

export default Header;
