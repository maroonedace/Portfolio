const NavigationLinks = ({ links, handleScrollToWork }) => {
  return (
    <>
      {links.map((link) => {
        return (
          <button
            key={link.name}
            tabIndex={0}
            className="text-xl md:text-md px-4 py-2 hover:bg-gray-700 rounded-full duration-150"
            onClick={() => handleScrollToWork(link.ref)}
          >
            {link.name}
          </button>
        );
      })}
    </>
  );
};

export default NavigationLinks;
