import React from "react";
import { Link } from "react-router-dom";

type Props = {
  items: ListItems[];
  resourceName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemComponent: React.FC<any>;
  itemClassName?: string;
  toLink: string;
};

const LinkList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  itemClassName,
  toLink,
}: Props) => {
  return (
    <>
      {items.map((item, i) => {
        const {
          [resourceName]: { id },
        } = { ...{ [resourceName]: item } };

        return (
          <Link key={i + toLink} to={toLink + id} className={itemClassName}>
            <ItemComponent {...{ [resourceName]: item }} />
          </Link>
        );
      })}
    </>
  );
};

export default LinkList;
