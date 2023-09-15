import { useEffect, useState } from "react";

const blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default blogs;