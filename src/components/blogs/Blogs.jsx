import { useEffect, useState } from "react";
import Blog from "../blog/blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl font-bold">This is my latest blog rr</h1>
            <h2>Name: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog blog= {blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;