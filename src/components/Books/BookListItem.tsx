const BookListItem = ({ book }: { book: DisplayBook }) => {
  const { imageSrc, name, year } = book;

  return (
    <>
      <img src={imageSrc} width={170} height={230} />
      <p className="text-xl font-semibold">{name}</p>
      <p>{year}</p>
    </>
  );
};

export default BookListItem;
