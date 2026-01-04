const Footer = () => {
  return (
    <footer className="bg-background p-4">
      <div className="flex flex-col items-end">
        <span className="text-sm">
          © {new Date().getFullYear()} Anthony Ostia
        </span>
      </div>
    </footer>
  );
};

export default Footer;
