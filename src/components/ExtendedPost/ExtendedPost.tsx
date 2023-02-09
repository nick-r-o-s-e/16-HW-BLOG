import { useState } from "react";
import { Link } from "react-router-dom";
import PostType from "../../types/PostType";
import { deletePost } from "../../api/requests";
import "./ExtendedPost.scss";
import { useNavigate } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";

interface Props extends PostType {
  postData: PostType;
}

function ExtendedPost({
  imageURL,
  title,
  author,
  content,
  comments,
  id,
  postData,
}: Props) {
  const navigate = useNavigate();

  const deletePage = (id: number) => {
    deletePost(String(id)).then(() => {
      navigate("/posts");
    });
  };

  const [commentForm, setCommentForm] = useState(false);

  const [postComments, setPostComments] = useState(comments);

  return (
    <div className="post-page">
      <div className="post">
        <div className="post__image__comments">
          <img src={imageURL} alt="" />
          {commentForm ? (
            <CommentForm
              setCommentForm={setCommentForm}
              addComment={setPostComments}
              postData={postData}
            />
          ) : (
            postComments.length > 0 && (
              <div
                className="comments-div-wrapper"
                style={{ display: `${commentForm ? "none" : "auto"}` }}
              >
                <div className="comments-div">
                  <div className="heading">
                    <h1>Comments</h1>
                    <button
                      className="btn btn-light"
                      onClick={() => setCommentForm(true)}
                    >
                      Add Comment
                    </button>
                  </div>

                  <div className="comments">
                    {[...postComments].reverse().map((comment) => {
                      return (
                        <div key={comment.id} className="comment">
                          <div
                            className="comment__image"
                            style={{
                              backgroundImage: `url(${
                                comment.image
                                  ? comment.image
                                  : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                              })`,
                            }}
                          ></div>
                          <div className="comment__content">
                            <h5>{comment.author}</h5>
                            <p>{comment.text}</p>
                          </div>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="post__content">
          <h1>{title}</h1>
          <h3>{author}</h3>
          <hr />
          <p>{content}</p>
          <div className="actions">
            <Link to={`./edit`}>
              <button className="btn btn-warning ">EDIT</button>
            </Link>
            <button className="btn btn-danger " onClick={() => deletePage(id)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedPost;
