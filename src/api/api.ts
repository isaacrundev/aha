import { QueryParams } from "@/types";
import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import axios from "axios";

export const fetchResults = async ({ queryKey, pageParam }) => {
  const [_key, { itemCount, keywords }] = queryKey;

  const res = await axios({
    url: "https://avl-frontend-exam.herokuapp.com/api/users/all",
    params: {
      page: pageParam,
      pageSize: itemCount,
      keyword: keywords,
    },
  });

  const data = res.data.data;
  const currPage = res.data.page;
  const totalPages = res.data.totalPages;

  return { data, currPage, totalPages };
};

export const fetchTags = async () => {
  const res = await axios({
    url: "https://avl-frontend-exam.herokuapp.com/api/tags",
  });
  return res.data;
};
