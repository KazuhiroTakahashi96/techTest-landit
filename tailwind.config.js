/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          landit: "#231815",
          at_PORT: "#0062b1",
          PIT_PORT: "#00aec4",
        },
        main: {
          primary: "#313546",
          primary_light: "#f0f3f5",
          white: "#ffffff",
        },
        accent: {
          attention: "#ee8f00",
          attention_light: "#fdf3e5",
          warning: "#de4335",
          emphasis: "#cb1706",
          empty_car: "#0062b1",
          vacant_schedule: "#3ea32d",
          full: "#aa4a41",
        },
        text: {
          black: "#23221f",
          grey: "#706d65",
          link: "#0071c1",
          link_dark: "#005a9a",
          link_light: "#f2f7fb",
          disabled: "#c1bdb7",
          white: "#ffffff",
        },
        component: {
          background: "#f8f7f6",
          border: "#e5e5e5",
          footer_background: "#ebeced",
          form_background: "#ffffff",
          form_border: "#a7a6a5",
          form_disabled_background: "#e6e5e4",
          table_header_bg: "#edebe8",
          attention_light: "#fdf4e5",
          text_link_dark: "#005a9a",
          text_link_light: "#f2f8fc",
        },
      },
    },
  },
  plugins: [],
};
