import { BsTrash } from "react-icons/bs";

type Props = {
  onClick?: () => void;
};

const DeleteButton = ({ onClick }: Props) => {
  return (
    <button
      className="text-5xl text-red-500 hover:text-red-700 transition-colors duration-300"
      onClick={onClick}
    >
      <BsTrash />
    </button>
  );
};

export default DeleteButton;
