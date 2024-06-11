import { useEffect, useState } from "react";
import classNames from "classnames";
import FriendItem from "../FriendItem";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingFriendItem from "../LoadingFriendItem";

type FollowerItem = {
  id: string;
  avatar: string;
  isFollowing: boolean;
  name: string;
  username: string;
};

const fetchFollowers = async () => {
  const res = await axios({
    url: "https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10",
  });
  return res.data.data;
};

const fetchFollowing = async () => {
  const res = await axios({
    url: "https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10",
  });
  return res.data.data;
};

export default function Friends() {
  const [isFollowersTabActive, setIsFollowersTabActive] = useState(true);
  const { data: followersData, isLoading } = useQuery({
    queryKey: ["followers"],
    queryFn: fetchFollowers,
  });
  const { data: followingData } = useQuery({
    queryKey: ["following"],
    queryFn: fetchFollowing,
  });

  const handleclick = () => {
    setIsFollowersTabActive(!isFollowersTabActive);
  };

  return (
    <>
      <div className="min-w-[375px] flex flex-col mt-3">
        <div className="min-h-[33px] flex mt-5 w-full">
          <button
            onClick={handleclick}
            disabled={isFollowersTabActive}
            className={classNames("grow text-center pb-1", {
              "font-bold border-b-2 border-b-white": isFollowersTabActive,
              "text-[#929292]": !isFollowersTabActive,
            })}
          >
            Followers
          </button>
          <button
            onClick={handleclick}
            disabled={!isFollowersTabActive}
            className={classNames("grow text-center pb-1", {
              "font-bold border-b-2 border-b-white": !isFollowersTabActive,
              "text-[#929292]": isFollowersTabActive,
            })}
          >
            Following
          </button>
        </div>
        <div className="flex flex-col gap-4 px-4 pt-9">
          {isFollowersTabActive ? (
            isLoading ? (
              <>
                <LoadingFriendItem />
                <LoadingFriendItem />
                <LoadingFriendItem />
                <LoadingFriendItem />
                <LoadingFriendItem />
              </>
            ) : (
              followersData?.map((i: FollowerItem) => (
                <FriendItem
                  key={i.id}
                  avatar={i.avatar}
                  isFollowing={i.isFollowing}
                  name={i.name}
                  username={i.username}
                />
              ))
            )
          ) : isLoading ? (
            <>
              <LoadingFriendItem />
              <LoadingFriendItem />
              <LoadingFriendItem />
              <LoadingFriendItem />
              <LoadingFriendItem />
            </>
          ) : (
            followingData?.map((i: FollowerItem) => (
              <FriendItem
                key={i.id}
                avatar={i.avatar}
                isFollowing={i.isFollowing}
                name={i.name}
                username={i.username}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
