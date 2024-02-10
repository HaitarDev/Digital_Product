"use client";
import { ArrowRight, ShoppingCart } from "lucide-react";
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
import Image from "next/image";

function SidebarCart() {
  const productCount: number = 0;
  const fee = 1;
  const total = 1;

  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className="cursor-pointer" />
      </SheetTrigger>

      {productCount === 0 ? (
        // empty cart
        <SheetContent className="w-full h-full flex flex-col justify-center items-center">
          <SheetTitle className="text-center flex-grow-0 ">
            Cart ({productCount})
          </SheetTitle>
          <div className="h-full w-full flex-grow flex flex-col justify-center items-center">
            <Image
              className=" object-contain"
              alt="empty-cart"
              src="/pngwing.com.png"
              width={100}
              height={100}
            />
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  variant={"link"}
                  className="w-full mt-4 text-gray-700"
                  onClick={() => router.push("/products")}
                >
                  Add your items to cart then checkout <ArrowRight width={20} />
                </Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </SheetContent>
      ) : (
        // not empty cart
        <SheetContent className="w-full h-full">
          <SheetHeader>
            <SheetTitle className="text-center">
              Cart ({productCount})
            </SheetTitle>
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
      )}
    </Sheet>
  );
}
export default SidebarCart;
