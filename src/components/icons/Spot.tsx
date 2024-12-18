type Props = {
  fillColor: "white" | "black";
  width?: number;
  height?: number;
};

const Spot = ({ fillColor, width = 15, height = 19 }: Props) => {
  let color = "";

  switch (fillColor) {
    case "white":
      color = "#ffffff";
      break;

    case "black":
      color = "#313546";
      break;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.65625 17.8281C4.82812 15.543 0.75 10.0938 0.75 7C0.75 3.27344 3.73828 0.25 7.5 0.25C11.2266 0.25 14.25 3.27344 14.25 7C14.25 10.0938 10.1367 15.543 8.30859 17.8281C7.88672 18.3555 7.07812 18.3555 6.65625 17.8281ZM7.5 9.25C8.73047 9.25 9.75 8.26562 9.75 7C9.75 5.76953 8.73047 4.75 7.5 4.75C6.23438 4.75 5.25 5.76953 5.25 7C5.25 8.26562 6.23438 9.25 7.5 9.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Spot;
