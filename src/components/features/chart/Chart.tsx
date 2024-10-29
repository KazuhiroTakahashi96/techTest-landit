import { useEstateTransactionContext } from "../../../context/useEstateTransactionContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { options } from "./options";

import Spot from "../../icons/Spot";
import Calendar from "../../icons/Calendar";
import Type from "../../icons/Type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { estateInfo } = useEstateTransactionContext();
  const { year, prefecture, displayType, transactionPrice, averagePrice } =
    estateInfo;

  const labels = [prefecture, "全国平均"];
  const priceData = [transactionPrice, averagePrice];

  const data = {
    labels, // x軸のラベルの配列
    datasets: [
      {
        data: priceData, // データの配列(labelsと要素数同じ)
        barThickness: 200,
        backgroundColor: (
          context: ScriptableContext<"bar">
          // グラフの棒の色を別々のグラデーションにするには [色1, 色2] を戻り値とするしかないが、そうすると型エラーが出るためここだけany型を許容させてもらいました
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ): CanvasGradient[] | any => {
          const ctx = context.chart.ctx;
          const gradient1 = ctx.createLinearGradient(0, 0, 500, 300);
          gradient1.addColorStop(0.24, "#009984");
          gradient1.addColorStop(0.75, "#97BF4A");

          const gradient2 = ctx.createLinearGradient(0, 0, 500, 300);
          gradient2.addColorStop(0, "#706D65");
          gradient2.addColorStop(0.99, "#57544C");

          return [gradient1, gradient2];
        },
      },
    ],
  };

  return (
    <div className="w-[1457px] flex items-center justify-center">
      {prefecture && year && displayType ? (
        <div className="w-[713px] flex flex-col justify-center">
          <div className="relative flex items-center justify-center gap-12 pb-10 text-2xl">
            <p className="absolute bottom-1 left-5 text-xs">（円/㎡）</p>

            <div className="flex items-center justify-center gap-3">
              <Spot fillColor="white" />
              <p>{prefecture}</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Calendar fillColor="white" />
              <p>{year}年</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Type fillColor="white" />
              <p>{displayType}</p>
            </div>
          </div>
          <Bar options={options} data={data} />
        </div>
      ) : null}
    </div>
  );
};

export default Chart;
