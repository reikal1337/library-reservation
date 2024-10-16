type Props = {
  book: DisplayBook;
  imageWidth?: number;
  imageHeight?: number;
};

const BookListItem = ({ book, imageWidth = 170, imageHeight = 230 }: Props) => {
  const { imageSrc, name, year } = book;

  return (
    <>
      <img src={imageSrc} width={imageWidth} height={imageHeight} />
      <p className="text-xl font-semibold">{name}</p>
      <p>{year}</p>
    </>
  );
};

export default BookListItem;
