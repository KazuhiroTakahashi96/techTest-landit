const getPrefectures = async () => {
  try {
    const res = await fetch(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
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
  }
};

export default getPrefectures;
