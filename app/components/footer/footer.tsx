import Link from "next/link";
import Image from "next/image";

import marace from "../../assets/marace.png"

const Footer = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-between px-4 py-6">
      <Link href="/">
        <Image className={`h-14 w-12`} src={marace} alt="logo" />
      </Link>
      <p className="text-white">
        Icons by{" "}
        <Link className="underline" href="https://icons8.com" target="_blank">
          Icons8
        </Link>
      </p>
    </div>
  );
};

export default Footer;
