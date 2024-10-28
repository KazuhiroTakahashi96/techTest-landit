type Props = {
  label?: string;
  name: string;
  children?: React.ReactNode;
  options: { value: string | number; label: string | number }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ label, name, children, options, onChange }: Props) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      {children}
      {label ? <p className="">{label}</p> : null}
      <select name={name} className="w-full h-full pl-2" onChange={onChange}>
        <option value="">選択してください</option>
        {options.map((opt) => (
          <option key={opt.label} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
