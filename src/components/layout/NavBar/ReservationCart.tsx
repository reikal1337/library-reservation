import ReservationCartButton from "../../buttons/ReservationCartButton";
import NumberIndicator from "../../NumberIndicator";

const ReservationCart = () => {
  return (
    <div className="relative bg-yellow-300 bg-opacity-45 w-full ">
      <NumberIndicator addClass="absolute -right-5 -top-3 z-10 " />
      <ReservationCartButton
        className="absolute text-4xl"
        onClick={() => console.log("Open cart lol")}
      />
    </div>
  );
};

export default ReservationCart;
