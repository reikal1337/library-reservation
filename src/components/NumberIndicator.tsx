//className if you want to fully overide class, addClas if you want to add.
type Props = {
  number?: number;
  className?: string;
  addClass?: string;
};
//Displays number in bubble, default style best for 3 digit number. 999.
const NumberIndicator = ({
  number = 0,
  addClass,
  className = "w-6 h-6 text-white text-bold text-xs p-1 rounded-full bg-blue-700 flex justify-center items-center",
}: Props) => {
  return <span className={`${className}  ${addClass}`}>{number}</span>;
};

export default NumberIndicator;
