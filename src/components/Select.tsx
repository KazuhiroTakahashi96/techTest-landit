type Props = {
  label?: string;
  name: string;
  children?: React.ReactNode;
  options: { value: string | number; label: string | number }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ label, name, children, options, onChange }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-full w-full">
      {children}
      {label ? <p className="">{label}</p> : null}
      <select
        name={name}
        className="w-full h-full pl-3 py-2.5 text-sm appearance-none"
        onChange={onChange}
      >
        <option value="">選択してください</option>
        {options.map((opt) => (
          <option key={opt.label} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <svg
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-4 right-3"
      >
        <path
          d="M5.5 6C5.28906 6 5.10156 5.92969 4.96094 5.78906L1.21094 2.03906C0.90625 1.75781 0.90625 1.26562 1.21094 0.984375C1.49219 0.679688 1.98438 0.679688 2.26562 0.984375L5.5 4.19531L8.71094 0.984375C8.99219 0.679688 9.48438 0.679688 9.76562 0.984375C10.0703 1.26562 10.0703 1.75781 9.76562 2.03906L6.01562 5.78906C5.875 5.92969 5.6875 6 5.5 6Z"
          fill="#706D65"
        />
      </svg>
    </div>
  );
};

export default Select;
