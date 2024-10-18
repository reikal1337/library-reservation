import TypeTag from "./TypeTag";

type Props = {
  book: DisplayBook;
  imageWidth?: number;
  imageHeight?: number;
};

const BookListItem = ({ book, imageWidth = 170, imageHeight = 230 }: Props) => {
  const { imageSrc, name, year, types } = book;

  return (
    <>
      <img src={imageSrc} width={imageWidth} height={imageHeight} />
      <p className="text-xl font-semibold">{name}</p>
      <div className="flex items-center justify-between">
        <p>{year}</p>
        <div className="flex flex-col items-end gap-1">
          {types.map((type, i) => (
            <TypeTag key={type + i} text={type} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookListItem;
