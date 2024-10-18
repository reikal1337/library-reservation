import React, { useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";

type Props = {
  onSearch: (searchParams: SearchParams) => void;
};

const SearchForm = ({ onSearch }: Props) => {
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const getType = (): BookType | null => {
    if (type == "audiobook" || type == "book") return type;
    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = {
      year: year ? parseInt(year) : null,
      type: getType(),
      name: name || null,
    };

    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 p-4">
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        min="0"
        max="3000"
        className="border border-gray-300 rounded p-2"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">All</option>
        <option value="audiobook">Audiobook</option>
        <option value="book">Book</option>
      </select>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search by name"
        className="border border-gray-300 rounded p-2"
      />

      <PrimaryButton type="submit">Search</PrimaryButton>
    </form>
  );
};

export default SearchForm;
