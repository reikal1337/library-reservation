import React from "react";
import { useParams } from "react-router-dom";

const BookPage = () => {
  const params = useParams<{ bookId: string }>();
  return <div></div>;
};

export default BookPage;
