import React from "react";
import { Heart, PackagePlus, Mountain, Gem } from "lucide-react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
export const ICONS = [
  {
    title: "Favorite Icons",
    href: "#",
    description:
      "Shop now your favorite icons. You can use them in your projects.",
    icon: <Heart width={20} className="text-red-500" />,
  },
  {
    title: "New Arrivals",
    href: "#",
    description: "Check our new arrivals and get inspired to create even more.",
    icon: <PackagePlus width={20} className="text-green-500" />,
  },
  {
    title: "Best Selling Icons",
    href: "#",
    description: "Find the best selling icons in our store.",
    icon: <AiTwotoneThunderbolt className="text-yellow-700 w-5 h-5" />,
  },
];

export const UI_KITS = [
  {
    title: `Editor Picks`,
    href: "#",
    description:
      "Shop now your favorite UI kits. You can use them in your projects.",
    icon: <Mountain width={20} className="text-yellow-500" />,
  },
  {
    title: "New Arrivals",
    href: "#",
    description: "Check our new arrivals and get inspired to create even more.",
    icon: <PackagePlus width={20} className="text-green-500" />,
  },
  {
    title: "Best Sellers Kits",
    href: "#",
    description: "Find the best selling UI kits in our store.",
    icon: <Gem width={20} className="text-violet-500" />,
  },
];
