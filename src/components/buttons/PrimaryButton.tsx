type Props = {
  onClick?: () => void;
  widthSize?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
};

const PrimaryButton = ({
  onClick,
  widthSize = "full",
  type = "button",
  children,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` text-sm font-semibold w-${widthSize} px-6 py-3  bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
