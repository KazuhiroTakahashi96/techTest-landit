type Props = {
  label: string;
  value: string | number;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio = ({ label, value, name, onChange }: Props) => {
  return (
    <div>
      <label htmlFor={label} className="flex items-center cursor-pointer">
        <input
          type="radio"
          name={name}
          id={label}
          value={value}
          onChange={onChange}
          className="rounded-full w-6 h-6 border border-text-link bg-text-link peer-checked:bg-component-text_link_dark peer-checked:border-component-text_link_dark"
        />
        <span className="ml-2 text-sm text-text-black">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
