import Window from "../assets/icons/window.svg";

const Footer = () => {
  return (
    <footer className="w-full h-[50px] flex items-center justify-between py-4 px-8 border-t border-white text-white bg-black">
      <div className="flex items-center justify-center gap-6">
        <p className="text-xs leading-[18px] flex items-center gap-2">
          <span>利用規約</span>
          <img src={Window} alt="" />
        </p>
        <p className="text-xs leading-[18px] flex items-center gap-2">
          <span>プライバシーポリシー</span>
          <img src={Window} alt="" />
        </p>
      </div>
      <div className="text-xs leading-[18px]">© 2023 Landit Inc.</div>
    </footer>
  );
};

export default Footer;
