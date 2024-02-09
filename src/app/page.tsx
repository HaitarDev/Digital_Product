import BrowseButton from "@/components/global/BrowseButton";
import HomeCards from "@/components/home/HomeCards";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="maxWidth flex flex-col items-center">
      <div className="text-center my-4 md:my-8 flex flex-col items-center gap-2 ">
        <h1 className="scroll-m-20  text-3xl md:text-3xl break-normal font-extrabold tracking-tight lg:text-5xl ">
          Your marketplace for high-quality <br />{" "}
          <span className="text-blue-400">Digital Assets.</span>
        </h1>
        <h4 className="scroll-m-20 text-lg md:text-xl font-medium tracking-tight text-primary/90">
          Welcome to the Digital Assets Marketplace, Evey asset on our platform
          is verified by our team.
        </h4>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
        <BrowseButton />
        <Button variant={"outline"}>Our quality promise</Button>
      </div>
      <HomeCards />
    </div>
  );
}
