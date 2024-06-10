import dog from "../assets/images/dog.png";

type Props = { itemName: string; username: string; avatar: string };

export default function ResultItem({ itemName, username, avatar }: Props) {
  return (
    <>
      <div className="flex flex-col gap-7 md:gap-3.5 md:w-[219px] md:h-[197px]">
        <img
          src={avatar}
          alt=""
          className="w-[335px] h-[222.67px] md:w-[219px] md:h-[146px]"
        />
        <div className="flex flex-col">
          <p className="text-[14.9px]">{itemName}</p>
          <p className="text-[11.17px] text-[#B2B2B2]">by {username}</p>
        </div>
      </div>
    </>
  );
}
