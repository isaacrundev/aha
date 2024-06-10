import arrow from "@/assets/icons/arrow.png";
import { TagItem } from "@/components/TagItem";
import { Link } from "@tanstack/react-router";
import { fetchTags } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import { Tag } from "@/types";

export function MobileTags() {
  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
  return (
    <>
      <div className="w-full">
        <div className="h-[70px]">
          <Link to="/">
            <div className="flex items-center gap-3 m-5">
              <img src={arrow} className="size-[26px]" />
              <p className="text-[24px]">Home Page</p>
            </div>
          </Link>
        </div>
        <main className="mx-5">
          <p className="text-[24px]">Tags</p>
          <div className="grid grid-cols-2 mt-5 gap-x-1 gap-y-5">
            {tagsData?.map((tag: Tag) => (
              <TagItem key={tag.id} tagCount={tag.count} tagName={tag.name} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
