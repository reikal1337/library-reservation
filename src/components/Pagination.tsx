import React, { useEffect, useState } from "react";

type Props = {
  currentPage: number;
  totalAmountOfPages: number;
  radio: number;
  onChange(page: number): void;
};

const Pagination = ({
  currentPage,
  totalAmountOfPages,
  radio,
  onChange,
}: Props) => {
  const [linkModels, setLinkedModel] = useState<linkModel[]>([]);

  useEffect(() => {
    const previousPageEnabled = currentPage !== 1;
    const previousPage = currentPage - 1;
    const links: linkModel[] = [];

    links.push({
      text: "Previous",
      enabled: previousPageEnabled,
      page: previousPage,
      active: false,
    });

    for (let i = 1; i <= totalAmountOfPages; i++) {
      if (i > currentPage - radio && i <= currentPage + radio) {
        links.push({
          text: `${i}`,
          enabled: true,
          page: i,
          active: currentPage === i,
        });
      }
    }

    const nextPageEnabled =
      currentPage !== totalAmountOfPages && totalAmountOfPages > 0;
    const nextPage = currentPage + 1;
    links.push({
      text: "Next",
      enabled: nextPageEnabled,
      page: nextPage,
      active: false,
    });
    setLinkedModel(links);
  }, [currentPage, totalAmountOfPages, radio]);

  const selectPage = (link: linkModel) => {
    if (link.page === currentPage) {
      return;
    }

    if (!link.enabled) {
      return;
    }
    onChange(link.page);
  };

  const getClass = (link: linkModel) => {
    if (link.active) {
      return " flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700";
    }

    if (!link.enabled) {
      return "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-gray-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ";
    }

    return "cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700";
  };

  return (
    <ul className="inline-flex -space-x-px text-base h-10">
      {linkModels.map((link) => (
        <li
          key={link.text}
          onClick={() => selectPage(link)}
          className={` ${getClass(link)}`}
        >
          <span>{link.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;

interface linkModel {
  page: number;
  enabled: boolean;
  text: string;
  active: boolean;
}
