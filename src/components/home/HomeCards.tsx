import Image from "next/image";
import { Badge } from "../ui/badge";

function HomeCards() {
  const cards = [
    {
      title: "Guaranteed Quality",
      description: "Our platform is 100% verified and backed by our team.",
      icon: "/icons8-satisfaction-guaranteed-64.png",
    },
    {
      title: "Fast Shipping",
      description: "Get your assets delivered instantly upon purchase.",
      icon: "/icons8-shipping-64.png",
    },
    {
      title: "Secure Transactions",
      description: "Enjoy peace of mind with our secure payment processing.",
      icon: "/icons8-secure-64.png",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-20 max-w-screen-lg justify-center items-center ">
      {cards.map((card) => (
        <div
          key={card.title}
          className={
            "rounded-lg border bg-card text-card-foreground shadow-sm p-4  w-2/3  md:w-full relative flex flex-col gap-5"
          }
        >
          <Badge className="cursor-pointer">{card.title}</Badge>
          <Image src={card.icon} width={64} height={64} alt="icon" />
          <p className="leading-7 ">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
export default HomeCards;
