import SliderSet from "@/components/SliderSet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import activeIcon from "@/assets/icons/active.png";
import inactiveIcon from "@/assets/icons/inactive.png";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function MobileHome() {
  const [itemCount, setItemCount] = useState<number>(3);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <header className="h-70">
        <div className="mx-[21px] my-6">
          <p className="font-bold text-[13px] bg-gradient-to-l from-[#FFD25F] to-[#FF5C01] inline-block text-transparent bg-clip-text">
            LOGO
          </p>
        </div>
      </header>
      <main className="px-5 pb-[66px]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <p className="py-1 text-2xl">Search</p>
            <Input
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              placeholder="Keyword"
              className="w-[335px] h-[60px]"
            />
          </div>
          <div className="my-6 text-2xl text-white"># Of Results Per Page</div>
          <div className="flex items-end gap-4 pb-2">
            <div className="w-12">
              <p className="text-5xl font-bold">{itemCount}</p>
            </div>
            <p className="pb-1">results</p>
          </div>
          <div className="py-4">
            <SliderSet setItemCount={setItemCount} />
          </div>
        </div>
        <div className="mt-52">
          <hr className="border-white/10" />
        </div>
        <Link
          to="/results/$itemcount/$keywords"
          params={{ itemcount: itemCount, keywords: searchInput }}
        >
          <Button variant="normal" className="w-[335px] h-[40px] mt-20">
            SEARCH
          </Button>
        </Link>
      </main>
      <nav className="flex justify-center h-[66px] bg-black/80 z-20 absolute bottom-0 w-full">
        <div className="flex w-[98px] justify-between items-center">
          <Link to="/">
            <img src={activeIcon} alt="active-icon" className="w-6 h-6" />
          </Link>
          <Link to="/tags">
            <img src={inactiveIcon} alt="inactive-icon" className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </>
  );
}
