import Image from "next/image";
import NavItems from "./NavItems";

export default function BigScreenNav() {
  return (
    <div className="w-full p-1 px-3">
      <div className="container mx-auto flex justify-between items-center gap-8">
        <div className="flex justify-start items-center gap-3">
          <Image
            src={`/codebiruny.png`}
            alt="Code biruny logo"
            width={50}
            height={50}
            className="h-[50px]"
          />
          <NavItems />
        </div>
      </div>
    </div>
  );
}
