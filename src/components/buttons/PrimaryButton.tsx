type Props = {
  onClick: () => void;
  widthSize?: string;
};

const PrimaryButton = ({ onClick, widthSize = "full" }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` text-sm font-semibold w-${widthSize} px-6 py-3  bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide`}
    >
      Save
    </button>
  );
};

export default PrimaryButton;
