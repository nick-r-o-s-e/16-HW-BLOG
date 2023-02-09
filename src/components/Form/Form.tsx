
import "./Form.scss"
interface Props {
    
    submitForm: Function;
    postData: {
        id?:number,
        title:string,
        imageURL:string,
        author:string,
        content:string
    },
    setPostData: Function,
    formDisabled: boolean
}

function Form({submitForm, postData, setPostData, formDisabled }: Props) {


  
  const changeData = (target: HTMLInputElement) => {
    setPostData(() => ({ ...postData, [target.name]: target.value }));
  };

  return (
    <div className="new-post">
      <form
        className="new-post__form"
        action="submit"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <h1>{postData.id? "Edit" : "New"} Post</h1>
        <hr />
        <div className="details">
          <div className="mb-3 title-div">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              value={postData.title}
              name="title"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              required
              onChange={(e) => {
                changeData(e.target);
              }}
            />
          </div>
          <div className="mb-3 author-div">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Author
            </label>
            <input
              value={postData.author}
              name="author"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              required
              onChange={(e) => {
                changeData(e.target);
              }}
            />
          </div>
          <div className="mb-3 image-div">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Image URL
            </label>
            <input
              value={postData.imageURL}
              name="imageURL"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              required
              onChange={(e) => {
                changeData(e.target);
              }}
            />
          </div>
        </div>

        <div className="mb-3 content-div">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Text
          </label>
          <textarea
            value={postData.content}
            name="content"
            className="form-control"
            id="exampleFormControlTextarea1"
            required
            onChange={(e) => {
              const target = e.target as unknown as HTMLInputElement;
              changeData(target);
            }}
          ></textarea>
        </div>
        <button disabled={formDisabled} className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
