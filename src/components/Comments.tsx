import { useJsonPlaceholderApi } from "../hooks/useJsonPlaceholder";
import { JSONComment } from "../types";
import styles from "./Comments.module.css";
export const Comments = ({ postId }: { postId: string }) => {
  const { data, isLoading, error } = useJsonPlaceholderApi<JSONComment[]>(
    `/posts/${postId}/comments`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
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
    <>
      <h3>Comments</h3>
      {data?.map((comment) => {
        return (
          <div className={styles.comment}>
            <h3 className={styles.title}>{comment.name}</h3>
            <span className={styles.body}>{comment.body}</span>
            <span className={styles.email}>- {comment.email}</span>
          </div>
        );
      })}
    </>
  );
};
