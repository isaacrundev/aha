import arrow from "@/assets/icons/arrow.png";
import ResultItem from "../ResultItem";
import { Link } from "@tanstack/react-router";
import { ResultItemType, ResultPageParams } from "@/types";
import { Fragment } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchResults } from "@/api/api";
import LoadingResultItem from "../LoadingResultItem";
import { Button } from "../ui/button";
import { v4 } from "uuid";

export function MobileResults({ itemCount, keywords }: ResultPageParams) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["fetchResults", { itemCount, keywords }],
    queryFn: fetchResults,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.currPage < lastPage.totalPages
        ? lastPage.currPage + 1
        : undefined,
  });
  return (
    <>
      <div className="w-full">
        <div className="h-[70px]">
          <Link to="/">
            <div className="flex items-center gap-2 m-5">
              <img src={arrow} className="size-[26px]" />
              <p className="text-[24px]">Home Page</p>
            </div>
          </Link>
        </div>
        <main className="mx-5 ">
          <p className="text-[24px] mb-5">Results</p>
          <div className="flex flex-col gap-9">
            {isLoading
              ? Array.from({ length: itemCount }).map((_, idx) => (
                  <LoadingResultItem key={idx} />
                ))
              : data?.pages.map((page) => (
                  <Fragment key={v4()}>
                    {page.data.map((i: ResultItemType) => (
                      <ResultItem
                        key={i.id}
                        itemName={i.name}
                        username={i.username}
                        avatar={i.avatar}
                      />
                    ))}
                  </Fragment>
                ))}
          </div>
          {hasNextPage && (
            <Button
              variant="normal"
              className="w-[343px] h-[40px] my-5"
              onClick={() => fetchNextPage()}
            >
              {isLoading ? "Loading..." : "MORE"}
            </Button>
          )}
        </main>
      </div>
    </>
  );
}
