type Props = {
  children: React.ReactNode;
  color?: string;
};
const H1 = ({ children, color }: Props) => {
  return <h1 className={`text-[${color}]  text-5xl mb-10`}>{children}</h1>;
};

export default H1;
