import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-white p-4">
      <h1 className="text-black">Anthony Ostia</h1>
      <div className="flex flex-row gap-4">
        <Link className="flex gap-2 items-center" href="https://github.com/meximanian" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </Link>
        <Link className="flex gap-2 items-center" href="https://www.linkedin.com/in/aostia" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="xl" className="text-linkedIn" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
