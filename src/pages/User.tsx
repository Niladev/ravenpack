import { useParams } from "react-router-dom";
import { Posts } from "./Posts";

export const User = () => {
  const { userId } = useParams();

  return <Posts userId={userId} />;
};
