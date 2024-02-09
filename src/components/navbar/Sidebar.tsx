import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ICONS, UI_KITS } from "@/lib/const";
import Link from "next/link";
import { Button } from "../ui/button";

function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        "md:hidden absolute bg-white right-0 h-screen w-72 duration-300 ease-in-out overflow-hidden drop-shadow-sm fade-in-0 ",
        {
          "w-full sm:w-72  overflow-hidden": isOpen,
          "w-0": !isOpen,
        }
      )}
    >
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="ui-kits">
          <AccordionTrigger className="px-2 hover:no-underline">
            UI Kits
          </AccordionTrigger>
          {UI_KITS.map((kit) => (
            <AccordionContent key={kit.title}>
              <Link className="px-2 flex items-center gap-3" href={kit.href}>
                {kit.title} {kit.icon}
              </Link>
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="icons">
          <AccordionTrigger className="px-2 hover:no-underline">
            Icons
          </AccordionTrigger>
          {ICONS.map((icon) => (
            <AccordionContent key={icon.title}>
              <Link className="px-2 flex items-center gap-3" href={icon.href}>
                {icon.title} {icon.icon}
              </Link>
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem
          className="px-2 py-4 hover:no-underline font-medium"
          value="about"
        >
          <Link href={"/about"}>About</Link>
        </AccordionItem>

        <Button
          variant={"destructive"}
          className="px-2 py-4 hover:no-underline font-medium w-10/12  flex justify-center mx-auto mt-4"
        >
          Signup
        </Button>
      </Accordion>
    </div>
  );
}
export default Sidebar;
