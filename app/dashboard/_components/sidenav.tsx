"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

type Props = {
  onLinkClick?: () => void;
};

function SideNav({ onLinkClick }: Props) {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white overflow-y-auto">
<div className="flex items-center justify-center gap-2 mb-4">
  <Image src="/logo.png" alt="logo" width={340} height={60} />
</div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index} onClick={onLinkClick}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                path === menu.path && "bg-primary text-white"
              }`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full px-5">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
