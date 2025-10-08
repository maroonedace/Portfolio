"use client";

const Footer = () => {
  return (
    <footer className=" bg-primary p-4">
      <div className="flex flex-col items-start sm:items-center md:items-end">
        <p className="text-sm text-right">
          © {new Date().getFullYear()} Anthony Ostia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
