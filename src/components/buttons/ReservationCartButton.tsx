import { IoLibrary } from "react-icons/io5";

type Props = {
  onClick: () => void;
  className?: string;
};

const ReservationCartButton = ({ onClick, className }: Props) => {
  return (
    <>
      <button onClick={onClick} className={className}>
        <IoLibrary />
      </button>
    </>
  );
};

export default ReservationCartButton;
