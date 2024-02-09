"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

function SidebarCart() {
  const productCount = 0;
  const fee = 1;
  const total = 1;

  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Cart ({productCount})</SheetTitle>
          <SheetDescription className="py-3">Cart Items</SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col  space-y-3 mt-4">
          <div className="flex justify-between items-center ">
            <h5 className=" tracking-wide">Shipping</h5>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between items-center ">
            <h5 className=" tracking-wide">Transaction Fee</h5>
            <p className="font-semibold">{formatPrice(fee)}</p>
          </div>
          <div className="flex justify-between items-center ">
            <h5 className=" tracking-wide">Total</h5>
            <p className="font-semibold">{formatPrice(total)}</p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="w-full mt-4"
              onClick={() => router.push("/cart")}
            >
              Go To Cart
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default SidebarCart;
