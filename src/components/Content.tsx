type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className="bgImage h-full p-10 bg-black text-white">{children}</div>
  );
};

export default Content;
