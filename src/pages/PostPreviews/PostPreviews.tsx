import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/requests";
import PostType from "../../types/PostType";
import PostPreviewCard from "../../components/PostPreviewCard/PostPreviewCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./PostPreviews.scss"
function PostPreviews() {
  const { data, isLoading } = useQuery<PostType[]>(["posts"], getPosts);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return <h1>something went wrong</h1>;
  }

  return (
    <div className="posts">
      <div className="post-previews">
        {data.map((post) => {
          const { id, imageURL, title, author, content } = post;
          return (
            <PostPreviewCard
              image={imageURL}
              key={id}
              id={id}
              title={title}
              author={author}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostPreviews;
