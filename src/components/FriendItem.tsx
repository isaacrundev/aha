import { Button } from "./ui/button";

type Props = {
  avatar: string;
  isFollowing: boolean;
  name: string;
  username: string;
};

export default function FriendItem({
  avatar,
  isFollowing,
  name,
  username,
}: Props) {
  return (
    <>
      <div className="w-[343px] h-[45px] flex justify-between items-center">
        <div className="flex gap-4">
          <img src={avatar} alt="" className="size-[40px]" />
          <div className="flex flex-col pb-1">
            <p>{name}</p>
            <p className="text-[#FFFFFF]/50 text-[14px]">{username}</p>
          </div>
        </div>
        {isFollowing ? (
          <Button variant="contained" className="w-[76px] h-[28px] md:mb-2">
            Following
          </Button>
        ) : (
          <Button variant="outlined" className="w-[60px] h-[29px] md:mb-2">
            Follow
          </Button>
        )}
      </div>
    </>
  );
}
