type ListItems = {
  id: string;
  [key: string]: string | string[];
};

type DisplayBook = {
  id: string;
  imageSrc: string;
  name: string;
  year: string;
  types: BookType[];
};

type BookType = "book" | "audiobook";
