import { Link, useParams } from "react-router-dom";
import { useJsonPlaceholderApi } from "../hooks/useJsonPlaceholder";
import { PostInterface } from "../types";
import styles from "./Posts.module.css";
export const Posts = () => {
  const { userId } = useParams();

  const { data, isLoading, error } = useJsonPlaceholderApi<PostInterface[]>(
    `/posts${userId ? `?userId=${userId}` : ""}`
  );

  if (error || (!isLoading && !data)) {
    return (
      <>
        <h1>Seems like we ran into an error...</h1>
        {error && <p>{error.message}</p>}
      </>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
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
