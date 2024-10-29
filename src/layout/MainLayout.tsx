import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default MainLayout;
