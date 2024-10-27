type Props = {
  label?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const Title = ({ label, subtitle, children }: Props) => {
  return (
    <div className="pb-4 border-b border-white">
      <div className="text-4xl flex items-end">
        {children}
        {label ? <p className="mr-4">{label}</p> : null}
        {subtitle ? <p className="text-sm">{subtitle}</p> : null}
      </div>
    </div>
  );
};

export default Title;
