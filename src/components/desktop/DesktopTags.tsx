import DesktopLayout from "./DesktopLayout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { TagItem } from "../TagItem";
import { fetchTags } from "@/api/api";
import { Tag } from "@/types";

export function DesktopTags() {
  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  return (
    <>
      <DesktopLayout isTags={true}>
        <main className="w-full">
          <div className="mt-[85px] ml-[254px] mr-60">
            <p className="text-3xl">Tags</p>
            <div className="grid grid-cols-5 my-1">
              {tagsData?.map((tag: Tag) => (
                <TagItem key={tag.id} tagCount={tag.count} tagName={tag.name} />
              ))}
            </div>
          </div>
        </main>
      </DesktopLayout>
    </>
  );
}
