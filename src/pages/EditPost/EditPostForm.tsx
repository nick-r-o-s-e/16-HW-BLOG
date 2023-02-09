import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { editPost } from "../../api/requests";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PostType from "../../types/PostType";
import { getSinglePost } from "../../api/requests";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
function EditPostForm() {
  const navigate = useNavigate();
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

  const { id } = data;

  const [postData, setPostData] = useState(data);

  const [formDisabled, setFormDisabled] = useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    setFormDisabled(true);
    e.preventDefault();
    editPost(id, postData).then(() => {
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

export default EditPostForm;
