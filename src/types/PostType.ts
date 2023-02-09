import Comment from "./Comment"

interface PostType {
    id:number,
    imageURL:string,
    title:string,
    author:string,
    content:string,
    comments: Comment[]
  }

  export default PostType