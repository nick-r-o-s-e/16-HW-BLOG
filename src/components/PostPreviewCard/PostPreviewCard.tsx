import "./PostPreviewCard.scss";
import { NavLink } from "react-router-dom";
interface Props {
  title: string;
  author: string;
  content: string;
  image: string;
  id: number;
}

import { useSearchParams } from "react-router-dom";

function PostPreviewCard({ title, author, content, image, id }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="card">
      <div
        className="image-div card-img-top"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content.slice(0, 150)}...</p>
        <NavLink
          className="btn btn-dark"
          onClick={() => setSearchParams({ id: String(id) })}
          to={`/posts/${id}`}
        >
          Read more
        </NavLink>
        {/* <a href={} className="btn btn-primary">
          Read more
        </a> */}
      </div>
    </div>
  );
}

export default PostPreviewCard;
