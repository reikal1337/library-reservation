type Props = {
  onClick: () => void;
  size?: number;
};

const CloseButton = ({ onClick, size = 4 }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-2 right-2 h-${size} w-${size} p-3 rounded-full bg-red-600 flex justify-center items-center text-white hover:text-black hover:bg-red-700 transition-colors duration-300`}
    >
      &#x2715;
    </button>
  );
};

export default CloseButton;
