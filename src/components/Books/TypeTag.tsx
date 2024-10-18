import { capitalizeFirstLetter } from "../../lib/utils/stringFormation";

type Props = {
  text: string;
};

const TypeTag = ({ text }: Props) => (
  <span className="bg-gray-100 rounded-lg p-[1px] px-2">
    {capitalizeFirstLetter(text)}
  </span>
);

export default TypeTag;
