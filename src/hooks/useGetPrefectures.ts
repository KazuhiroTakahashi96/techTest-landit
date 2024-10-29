import { useEffect, useState } from 'react';

export type Prefectures = {
  prefCode: number;
  prefName: string;
};

const useGetPrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefectures[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: {
          'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
        },
      });

      const data = await res.json();
      // console.log(data);
      setPrefectures(data.result);
    };
    fetchPrefectures();
  }, []);

  return prefectures;
};
export default useGetPrefectures;
