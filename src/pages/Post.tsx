import { Link, useParams } from "react-router-dom";
import { useJsonPlaceholderApi } from "../hooks/useJsonPlaceholder";
import { JSONPost } from "../types";
import styles from "./Post.module.css";
import { Comments } from "../components/Comments";
import { Loading } from "../components/Loading";

export const Post = () => {
  const { postId } = useParams();

  const { data, isLoading, error } = useJsonPlaceholderApi<JSONPost>(
    `/posts/${postId}`
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
    <div className={styles.post}>
      <h1 className={styles.title}>{data?.title}</h1>
      <Link
        to={`/user/${data.userId}`}
        className={styles.user}
      >{`User ${data?.userId}`}</Link>
      <p className={styles.body}>{data.body}</p>
      {postId && <Comments postId={postId} />}
    </div>
  );
};
