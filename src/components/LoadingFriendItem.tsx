import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingFriendItem() {
  return (
    <>
      <div className="w-[343px] h-[45px] flex justify-between items-center">
        <div className="flex gap-4">
          <Skeleton className="size-[40px]" />
          <div className="flex flex-col gap-2 pb-1">
            <Skeleton className="w-32 h-2" />
            <Skeleton className="h-2 w-28" />
          </div>
        </div>
        <Skeleton className="w-16 rounded-full h-7 md:mb-2" />
      </div>
    </>
  );
}
