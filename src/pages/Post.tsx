import { Link, useParams } from "react-router-dom";
import { useJsonPlaceholderApi } from "../hooks/useJsonPlaceholder";
import { PostInterface } from "../types";
import styles from "./Post.module.css";

export const Post = () => {
  const { postId } = useParams();

  const { data, isLoading, error } = useJsonPlaceholderApi<PostInterface>(
    `/posts/${postId}`
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
    <div className={styles.post}>
      <h1 className={styles.title}>{data?.title}</h1>
      <Link
        to={`/user/${data?.userId}`}
        className={styles.user}
      >{`User ${data?.userId}`}</Link>
      <p>{data?.body}</p>
    </div>
  );
};
