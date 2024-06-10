import SliderSet from "@/components/SliderSet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DesktopLayout from "./DesktopLayout";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function DesktopHome() {
  const [itemCount, setItemCount] = useState(3);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <DesktopLayout>
        <main className="flex items-center justify-center w-full">
          <div className="flex flex-col justify-between h-full px-20 pb-[88px] pt-14">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <p className="text-2xl leading-9 ">Search</p>
                <Input
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                  placeholder="Keyword"
                  className="w-[725px] h-[60px]"
                />
              </div>
              <hr className="my-2 border-white/10" />
              <div className="text-2xl leading-9 text-white">
                # Of Results Per Page
              </div>
              <div className="flex items-end gap-4">
                <div className="w-12">
                  <p className="text-5xl font-bold">{itemCount}</p>
                </div>
                <p>results</p>
              </div>
              <div className="mt-2">
                <SliderSet setItemCount={setItemCount} />
              </div>
              <hr className="my-2 border-white/10" />
            </div>
            <Link
              to="/results/$itemcount/$keywords"
              params={{ itemcount: itemCount, keywords: searchInput }}
            >
              <Button variant="normal" className="w-[343px] h-[40px]">
                SEARCH
              </Button>
            </Link>
          </div>
        </main>
      </DesktopLayout>
    </>
  );
}
