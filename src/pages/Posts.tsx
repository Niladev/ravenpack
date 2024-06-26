import { Link } from "react-router-dom";
import { useJsonPlaceholderApi } from "../hooks/useJsonPlaceholder";
import { JSONPost } from "../types";
import styles from "./Posts.module.css";
import { Loading } from "../components/Loading";
export const Posts = ({ userId }: { userId?: string }) => {
  const { data, isLoading, error } = useJsonPlaceholderApi<JSONPost[]>(
    `/posts${userId ? `?userId=${userId}` : ""}`
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return (
      <>
        <h1>Seems like we ran into an error...</h1>
        {error && <p>{error.message}</p>}
      </>
    );
  }

  return (
    <div className={styles.posts}>
      {data?.map((post) => {
        return (
          <Link to={`/post/${post.id}`} className={styles.title}>
            {post.title}
          </Link>
        );
      })}
    </div>
  );
};
