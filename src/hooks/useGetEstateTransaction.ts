import { useState } from "react";

// ------------- 特定の都道府県・年度・種類の不動産取引価格を取得する -------------
export const useGetEstateTransaction = () => {
  const [dataIsLoading, setDataIsLoading] = useState(false);

  const fetchEstateTransaction = async (
    year: string,
    prefCode: string,
    displayType: string
  ) => {
    setDataIsLoading(true);

    try {
      const res = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?year=${year}&prefCode=${prefCode}&cityCode=-&displayType=${displayType}`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
          },
        }
      );
      const data = await res.json();

      return data.result;
    } catch (error) {
      console.error(error);
    } finally {
      setDataIsLoading(false);
    }
  };

  return { dataIsLoading, fetchEstateTransaction };
};
