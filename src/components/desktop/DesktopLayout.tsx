import activeIcon from "@/assets/icons/active.png";
import inactiveIcon from "@/assets/icons/inactive.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "@tanstack/react-router";

import { ReactNode } from "react";
import Friends from "./Friends";

export default function DesktopLayout({
  children,
  isTags = false,
}: {
  children: ReactNode;
  isTags?: boolean;
}) {
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      <div className="flex min-h-[900px]">
        <nav className="w-20">
          <div className="flex flex-col items-center">
            <div className=" flex w-20 h-[88px] justify-center items-center mb-2">
              <p className="font-bold bg-gradient-to-l from-[#FFD25F] to-[#FF5C01] inline-block text-transparent bg-clip-text text-[13px]">
                LOGO
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col items-center">
                <Link to="/">
                  {isTags ? (
                    <img src={inactiveIcon} alt="" className="w-6 h-6" />
                  ) : (
                    <img src={activeIcon} alt="" className="w-6 h-6" />
                  )}
                </Link>
                <p className="text-[12px]">Home</p>
              </div>
              <div className="flex flex-col items-center">
                <Link to="/tags">
                  {isTags ? (
                    <img src={activeIcon} alt="" className="w-6 h-6" />
                  ) : (
                    <img src={inactiveIcon} alt="" className="w-6 h-6" />
                  )}
                </Link>
                <p className="text-[12px]">Tags</p>
              </div>
            </div>
          </div>
        </nav>
        {children}
        {isLargeScreen && !isTags && <Friends />}
      </div>
    </>
  );
}
