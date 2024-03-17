import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery {
  page: number;
  pageSize: number;
}

// const usePosts = (userId: number | undefined, query: PostQuery) => {
const usePosts = (query: PostQuery) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  // return useQuery<Post[]>({
  //   queryKey: ["posts", query],
  //   queryFn: () => fetchPosts(),
  //   staleTime: 1 * 60 * 1000,
  // });
  const { data } = useQuery<Post[]>(["posts", query], () => fetchPosts(), {
    select: (data: number) => data.toString(),
    keepPreviousData: true,
  });
};

export default usePosts;
