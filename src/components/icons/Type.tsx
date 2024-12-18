type Props = {
  fillColor: "white" | "black";
  width?: number;
  height?: number;
};

const Type = ({ fillColor, width = 19, height = 19 }: Props) => {
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
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9492 6.4375C15.1602 6.78906 15.1602 7.21094 14.9492 7.5625C14.7734 7.91406 14.3867 8.125 14 8.125H7.25C6.82812 8.125 6.44141 7.91406 6.26562 7.5625C6.05469 7.21094 6.05469 6.78906 6.26562 6.4375L9.64062 0.8125C9.85156 0.460938 10.2031 0.25 10.625 0.25C11.0117 0.25 11.3633 0.460938 11.5742 0.8125L14.9492 6.4375ZM10.625 11.2188C10.625 10.4453 11.2227 9.8125 12.0312 9.8125H17.0938C17.8672 9.8125 18.5 10.4453 18.5 11.2188V16.2812C18.5 17.0898 17.8672 17.6875 17.0938 17.6875H12.0312C11.2227 17.6875 10.625 17.0898 10.625 16.2812V11.2188ZM0.5 13.75C0.5 11.2891 2.50391 9.25 5 9.25C7.46094 9.25 9.5 11.2891 9.5 13.75C9.5 16.2461 7.46094 18.25 5 18.25C2.50391 18.25 0.5 16.2461 0.5 13.75Z"
        fill={color}
      />
    </svg>
  );
};

export default Type;
