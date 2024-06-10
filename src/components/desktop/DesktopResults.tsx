import { Fragment, useEffect } from "react";
import arrow from "@/assets/icons/arrow.png";
import { Button } from "../ui/button";
import DesktopLayout from "./DesktopLayout";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import LoadingResultItem from "../LoadingResultItem";
import ResultItem from "../ResultItem";
import { fetchResults } from "@/api/api";
import { ResultItemType, ResultPageParams } from "@/types";
import { v4 } from "uuid";

export default function DesktopResults({
  itemCount,
  keywords,
}: ResultPageParams) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["fetchResults", { itemCount, keywords }],
    queryFn: fetchResults,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.currPage < lastPage.totalPages
        ? lastPage.currPage + 1
        : undefined,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <DesktopLayout>
        <div className="w-full mx-20 mt-20">
          <div className="h-[70px]">
            <Link to="/">
              <div className="flex items-center gap-4 m-3">
                <img src={arrow} className="w-[26px] h-[26px]" />
                <p className="text-[30px]">Results</p>
              </div>
            </Link>
          </div>

          <main className="flex flex-col gap-12 pt-3 mx-5 px-7">
            <div className="grid grid-cols-3 gap-7">
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
                className="w-[343px] h-[40px]"
                onClick={() => fetchNextPage()}
              >
                {isLoading ? "Loading..." : "MORE"}
              </Button>
            )}
          </main>
        </div>
      </DesktopLayout>
    </>
  );
}
