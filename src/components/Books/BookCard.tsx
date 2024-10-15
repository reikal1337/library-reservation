type Props = {
  imageSrc: string;
  name: string;
  year: string;
};

const BookCard = ({ imageSrc, name, year }: Props) => {
  return (
    <>
      <img src={imageSrc} width={170} height={230} />
      <p>{name}</p>
      <p>{year}</p>
    </>
  );
};

export default BookCard;
