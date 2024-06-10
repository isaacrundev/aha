import cool from "@/assets/tags/cool.png";

type Props = {
  tagCount: number;
  tagName: string;
};
export function TagItem({ tagCount, tagName }: Props) {
  return (
    <>
      <div className="flex flex-col gap-3.5 px-2 md:my-4 md:gap-4">
        <div className="w-[150px] h-[150px] relative bg-white/5  rounded-xl">
          <img
            src={cool}
            alt=""
            className="absolute bottom-3 left-3 w-[81px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[14.9px] truncate">{tagName}</p>
          <p className="text-[11.17px] text-[#B2B2B2]">{tagCount} Questions</p>
        </div>
      </div>
    </>
  );
}
