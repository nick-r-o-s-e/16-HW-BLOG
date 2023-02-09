import { useState } from "react";
import PostType from "../../types/PostType";
import "./CommentForm.scss";
import { useNavigate } from "react-router-dom";
import { editPost } from "../../api/requests";
import {v4 as uuid} from "uuid"
interface Props {
  addComment:Function;
  postData: PostType;
  setCommentForm:Function
}
function CommentForm({  postData, addComment,setCommentForm }: Props) {
  const [commentData, setCommentData] = useState({
    id: uuid(),
    author: "",
    image: "",
    text: "",
  });

  const navigate = useNavigate()

  const changeData = (target: HTMLInputElement) => {
    setCommentData(() => ({ ...commentData, [target.name]: target.value }));
  };

  const [formDisabled, setFormDisabled] = useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    setFormDisabled(true);
    e.preventDefault();
    editPost(postData.id, {
        ...postData,
        comments: [...postData.comments, commentData],
      }).then(() => {
        setCommentForm(false)
     addComment([...postData.comments, commentData]);
    });
  };


  return (
    <form
      action="submit"
      className="comment-form"
      onSubmit={(e) => submitForm(e)}
    >
      <h1>New Comment</h1>
      <div className="mb-3 title-div">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Author
        </label>
        <input
          value={commentData.author}
          name="author"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          required
          onChange={(e) => changeData(e.target)}
        />
      </div>
      <div className="mb-3 title-div">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          User Image url
        </label>
        <input
          value={commentData.image}
          name="image"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          onChange={(e) => changeData(e.target)}
        />
      </div>
      <div className="mb-3 title-div">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Comment
        </label>
        <input
          value={commentData.text}
          name="text"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          required
          onChange={(e) => changeData(e.target)}
        />
      </div>
      <button disabled={formDisabled} type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
