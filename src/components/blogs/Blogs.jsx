import { useEffect, useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <h1 className="text-3xl font-bold">This is my latest blog</h1>
            <h2>Name: {blogs.length}</h2>
        </div>
    );
};

export default Blogs;