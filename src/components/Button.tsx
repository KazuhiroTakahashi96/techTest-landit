type Props = {
  label?: string;
  type: "primary" | "secondary" | "danger";
  size: "default" | "large";
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
};

const Button = ({ label, type, size, onClick, children }: Props) => {
  let classNameByType: string = "";
  let classNameBySize: string = "";
  switch (type) {
    case "primary":
      classNameByType =
        "bg-text-link text-white rounded-sm hover:bg-text-link_dark active:bg-text-link disabled:bg-text-disabled";
      break;
    case "secondary":
      classNameByType =
        "bg-white text-text-link rounded-sm border border-text-link hover:bg-text-link_light active:bg-white disabled:bg-text-disabled";
      break;
    case "danger":
      classNameByType =
        "bg-white text-accent-warning rounded-sm border border-accent-warning hover:bg-accent-attention_light active:bg-white disabled:bg-text-disabled";
      break;
  }

  switch (size) {
    case "default":
      classNameBySize = "w-[130px] h-10 py-2 px-4 text-sm";
      break;

    case "large":
      classNameBySize = "w-full h-[52px] py-3 px-4 text-base";
      break;
  }

  return (
    <button
      className={classNameByType + " " + classNameBySize}
      onClick={onClick}
    >
      <div>
        {children}
        {label}
      </div>
    </button>
  );
};

export default Button;
