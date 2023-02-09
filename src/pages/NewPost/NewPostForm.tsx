import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { addPost } from "../../api/requests";
function NewPostForm() {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: "",
    author: "",
    imageURL: "",
    content: "",
    comments:[]
  });

  const [formDisabled, setFormDisabled] = useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    setFormDisabled(true);
    e.preventDefault();
    addPost(postData).then(() => {
      navigate("/posts");
    });
  };

  return (
    <Form
      formDisabled={formDisabled}
      submitForm={submitForm}
      postData={postData}
      setPostData={setPostData}
    />
  );
}

export default NewPostForm;
