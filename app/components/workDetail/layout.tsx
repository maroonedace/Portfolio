import Link from "next/link";

const WorkDetailLayout = ({ children }) => {
  return (
    <div className="bg-gray-700 p-4 flex flex-col gap-4 h-full">
      <div>
        <Link
          className="px-4 py-2 rounded-2xl border border-white bg-gray-800 hover:bg-gray-600 "
          href="/#work"
        >
          Return to Page
        </Link>
      </div>
      <div className="bg-gray-900 rounded-2xl p-4">{children}</div>
    </div>
  );
};

export default WorkDetailLayout;
