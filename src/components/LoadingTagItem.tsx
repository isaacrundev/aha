import { Skeleton } from "@/components/ui/skeleton";

// export default function LoadingTagItem() {
//   return (
//     <>
//       <div className="flex flex-col gap-7 md:gap-3.5 md:w-[219px] md:h-[197px]">
//         <Skeleton className="w-[335px] h-[222.67px] md:w-[219px] md:h-[146px]" />
//         <div className="flex flex-col gap-2">
//           <Skeleton className="w-3/4 h-2" />
//           <Skeleton className="w-full h-2" />
//         </div>
//       </div>
//     </>
//   );
// }

export default function LoadingTagItem() {
  return (
    <>
      <div className="flex flex-col gap-3.5 px-2 md:my-4 md:gap-4">
        <Skeleton className="w-[150px] h-[150px] rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-32 h-2" />
          <Skeleton className="h-2 w-28" />
        </div>
      </div>
    </>
  );
}
