import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../../services/api-client";

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
  const fetchPosts = (pageParam: number) =>
    apiClient
      .get<Post[]>("/posts", {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
