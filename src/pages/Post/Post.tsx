import { getSinglePost, editPost } from "../../api/requests";
import PostType from "../../types/PostType";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import ExtendedPost from "../../components/ExtendedPost/ExtendedPost";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function Post() {
  const { id: searchID } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<PostType>(["post", searchID], () =>
    getSinglePost(Number(searchID)!)
  );

  

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return <h1>something went wrong</h1>;
  }
  const { imageURL, title, author, content, id, comments } = data;

  
  return (
    <ExtendedPost
    
    postData={data}
    comments={comments}
      id={id}
      imageURL={imageURL}
      title={title}
      author={author}
      content={content}
    />
  );
}

export default Post;
