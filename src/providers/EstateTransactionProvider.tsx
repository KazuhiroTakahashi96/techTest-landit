import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type EstateInfo = {
  year: number;
  prefecture: string;
  displayType: string;
  transactionPrice: number;
  averagePrice: number;
};

export const EstateTransactionContext = createContext({
  estateInfo: {
    year: 0,
    prefecture: "",
    displayType: "",
    transactionPrice: 0,
    averagePrice: 0,
  },
  updateEstateInfo: ({
    year,
    prefecture,
    displayType,
    transactionPrice,
    averagePrice,
  }: EstateInfo) => {
    // 引数を未使用だとエラーが出るため、以下の記述をした
    console.log(year, prefecture, displayType, transactionPrice, averagePrice);
  },
});

const EstateTransactionProvider = ({ children }: Props) => {
  // グローバル管理する不動産取引価格のステート
  const [estateInfo, setEstateInfo] = useState<EstateInfo>({
    year: 0, // 年度
    prefecture: "", // 場所
    displayType: "", // 種類
    transactionPrice: 0, // 不動産取引価格
    averagePrice: 0, // 全国平均の不動産取引価格
  });

  // /src/components/form/Form.tsx で使用
  const updateEstateInfo = ({
    year,
    prefecture,
    displayType,
    transactionPrice,
    averagePrice,
  }: EstateInfo) => {
    setEstateInfo({
      year,
      prefecture,
      displayType,
      transactionPrice,
      averagePrice,
    });
  };

  const value = {
    estateInfo,
    updateEstateInfo,
  };

  return (
    <EstateTransactionContext.Provider value={value}>
      {children}
    </EstateTransactionContext.Provider>
  );
};

export default EstateTransactionProvider;
