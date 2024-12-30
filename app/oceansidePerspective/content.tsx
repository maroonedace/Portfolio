import Image from "next/image";
import OPPic from "../assets/work/op/opdashboard.png";

const Content = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <Image
          className="w-[80%] rounded-xl"
          src={OPPic}
          alt="Background Picture"
        />
        <p>A description about my origin with Oceanside Perspective</p>
      </div>
    </div>
  );
};

export default Content;
