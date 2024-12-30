import Image from "next/image";
import NZeroPic from "../assets/work/nZero/nzeroDashboard.jpeg";

const Content = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <Image
          className="w-[80%] rounded-xl"
          src={NZeroPic}
          alt="Background Picture"
        />
        <p>A description about my origin with NZero</p>
      </div>

      <div className="flex items-center justify-center">
        <Image
          className="w-[80%] rounded-xl"
          src={NZeroPic}
          alt="Background Picture"
        />
        <p>A description about my work with the dashboard page</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="w-[80%] rounded-xl"
          src={NZeroPic}
          alt="Background Picture"
        />
        <p>A description about my work with the UI refresh</p>
      </div>
    </div>
  );
};

export default Content;
