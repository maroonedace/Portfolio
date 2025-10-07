const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-800 p-4">
      <div className="flex flex-col items-start sm:items-center md:items-end">
        <p className="text-sm text-right">
          © {new Date().getFullYear()} Anthony Ostia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
