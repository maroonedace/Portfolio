import { type FC } from "react";

interface DescriptionListProps {
  descriptions: string[];
}

const DescriptionList: FC<DescriptionListProps> = ({ descriptions }) => (
  <ul className="list-disc pl-5 space-y-2">
    {descriptions.map((bullet, index) => (
      <li key={`bullet-${index}`} className="text-lg leading-relaxed">
        {bullet}
      </li>
    ))}
  </ul>
);

export default DescriptionList;
