import { ArrowDownRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

function BrowseButton() {
  return (
    <Link href={"/"} className={buttonVariants()}>
      Browse Trending
      <ArrowDownRightIcon width={20} />
    </Link>
  );
}
export default BrowseButton;
