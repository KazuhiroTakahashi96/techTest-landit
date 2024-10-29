import MainLayout from '../../layout/MainLayout';
import Form from '../../components/features/form/Form';
import Title from '../../components/Title';
import Chart from '../../components/features/chart/Chart';

import Graph from '../../assets/icons/graph.svg';

const EstateTransaction = () => {
  return (
    <MainLayout>
      <Title label="取引価格" subtitle="※取引面積1㎡あたり">
        <div className="py-[5px] mr-2.5">
          <img src={Graph} alt="" className="w-[30px] h-[30px]" />
        </div>
      </Title>

      <div className="w-[1840px] h-[860px] flex gap-6 py-10">
        <Chart />
        <Form />
      </div>
    </MainLayout>
  );
};

export default EstateTransaction;
