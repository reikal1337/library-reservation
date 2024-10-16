import React from "react";

type Props = {
  items: ListItems[];
  resourceName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemComponent: React.FC<any>;
  itemClassName?: string;
};

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  itemClassName,
}: Props) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <li key={i + item.id} className={itemClassName}>
            <ItemComponent {...{ [resourceName]: item }} />
          </li>
        );
      })}
    </>
  );
};

export default RegularList;
