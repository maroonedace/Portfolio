import { type FC } from "react";

interface HighlightListProps {
  highlights: string[];
}

const HighlightList: FC<HighlightListProps> = ({ highlights }) => (
  <div className="flex flex-col gap-2 self-center md:self-start text-left">
    <h4 className="text-xl md:text-2xl">Highlights</h4>
    <ul className="list-disc pl-5 space-y-2">
      {highlights.map((highlight) => (
        <li key={highlight} className="text-lg leading-relaxed text-balance">
          {highlight}
        </li>
      ))}
    </ul>
  </div>
);

export default HighlightList;
