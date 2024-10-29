export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    // グラフのX軸
    x: {
      border: {
        color: "#e5e5e5",
      },
      ticks: {
        // 都道府県/全国平均 のスタイリング
        color: "#fff",
        font: {
          size: 16,
          weight: 700,
          family: "Noto Sans JP",
        },
      },
    },
    // グラフのY軸
    y: {
      // 単位を表示している。Pタグで実装したためコメントアウト
      // title: {
      // display: true,
      // text: "（円/㎡）",
      // color: "#fff",
      // font: {
      //   size: 12,
      //   weight: 400,
      //   family: "Noto Sans JP",
      // },
      // },
      grid: {
        tickColor: "#e5e5e5", // 目盛りの線の色
      },
      border: {
        color: "#e5e5e5", // Y軸の線の色
      },
      // 目盛りの色など
      ticks: {
        color: "#fff",
        font: {
          size: 12,
          weight: 400,
          family: "Noto Sans JP",
        },
        padding: 10,
      },
    },
  },
};
