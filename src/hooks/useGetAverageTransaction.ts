import { useState } from 'react';

// ------------- 特定の年度・種類の不動産取引価格の全国平均価格を取得する -------------
export const useGetAverageTransaction = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAverageTransaction = async (year: string, displayType: string) => {
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?year=${year}&prefCode=-&cityCode=-&displayType=${displayType}`,
        {
          headers: {
            'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
          },
        }
      );

      const data = await res.json();

      return data.result;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, fetchAverageTransaction };
};
