import axios from "axios"
import PostType from "../types/PostType"

interface newPost {
    title: string,
    author: string,
    imageURL:string,
    content:string
}

export const getPosts = async () => {
    const {data} = await axios.get("http://localhost:3004/posts")
    return data
}

export const getSinglePost = async (id:number) => {
    const {data} = await axios.get(`http://localhost:3004/posts?id=${String(id)}`)
    return data[0]
}


export const addPost= async (post:newPost) => {
    await axios.post(`http://localhost:3004/posts`, post)
    
}

export const deletePost= async (id:string) => {
    await axios.delete(`http://localhost:3004/posts/${id}`)
    
}
export const editPost= async (id:number, post:PostType) => {
    await axios.put(`http://localhost:3004/posts/${String(id)}`, post)
    
}

