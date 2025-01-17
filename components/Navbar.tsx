"use client";
import {
  Bell,
  Briefcase,
  ChevronDown,
  HandCoins,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Jobs",
    href: "/",
    icon: <Briefcase width={24} height={24} strokeWidth={1.25} />,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: (
      <div className="relative">
        <MessageSquare width={24} height={24} strokeWidth={1.25} />
        <div className="w-1 h-1 rounded-full bg-red-700 absolute right-0 top-0"></div>
      </div>
    ),
  },
  {
    title: "Payments",
    href: "/payments",
    icon: <HandCoins width={24} height={24} strokeWidth={1.25} />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full md:h-24 flex justify-between items-center px-2 sm:px-6 py-4 md:py-0 gap-4 md:gap-0 flex-wrap md:flex-nowrap  md:px-10 bg-white border-b-2 border-clade-gray">
      <div className="flex items-center justify-center  gap-2">
        <div className="relative w-12 h-12">
          <div className="Frame33 w-[100px] h-[61px] px-7 py-[9px] bg-neutral-200 justify-center items-center gap-2.5 inline-flex">
            <div className="Logo text-red-500 text-xl font-bold font-['Satoshi Variable']">
              Logo
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-16 rounded-full items-center p-2 border-2 gap-4 lg:gap-12">
        {navItems.map((item, unk) => (
          <Link href={item.href} key={unk}>
            <div
              className={`h-12 flex gap-1 items-center rounded-full px-3 py-2 cursor-pointer ${
                pathname === item.href
                  ? "bg-clade-primary text-white border-2 border-clade-border"
                  : "bg-transparent text-gray-500"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="relative">
          <Bell />
          <div className="w-1 h-1 rounded-full bg-red-700 absolute right-0 top-0"></div>
        </div>
        <div className="flex items-center  gap-2 cursor-pointer">
          <div className="w-10 h-10  rounded-full relative">
            <Image
              layout="fill"
              src={"/atlassian.png"}
              alt="profile"
              objectFit="cover"
            />
          </div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
