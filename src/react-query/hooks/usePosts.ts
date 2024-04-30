import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../../services/api-client";
import postsService from "../../services/postsService";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      postsService.get({
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize,
      }),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
