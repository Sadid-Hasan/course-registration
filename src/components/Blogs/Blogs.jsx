import { useEffect, useState } from "react";

const blogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [selectedCourse, setselectedCourse]=useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    const handleSelectActor = (blog) =>{
    
    }

    return (
        <div className="flex">
            {/* Card div Start*/}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-3/4">
            {
                blogs.map(blog => (
                    <div key={blog.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={blog.course_image} alt="course" className="rounded-xl" />
                                </figure>
                            <div className="card-body items-center text-justify ">
                                    <h2 className="card-title text-justify">{blog.course_title}</h2>
                                    <p className="text-justify" >{blog.course_description}</p>
                                <div className="flex space-between">
                                    <h1 >Price:{blog.course_price}</h1>
                                    <h1>Credit:{blog.credit_hours}</h1>
                                </div>
                                <div className="card-actions ">
                                        <button onClick={()=>handleSelectActor(blog)} className="btn btn-wide ">Select</button>
                                </div>
                            </div>
                    </div>
                ))
            }
        </div>
        {/* Card div End*/}
    {/* Cart div Start*/}
    <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">Credit Hour Remaining 7 hr</h2>
        <h1>Course name</h1>
        <p>Total credit hour:</p>
        <p>Total Price:</p>
  </div>
</div>
    {/* Cart div End*/}
    </div>
        
    );
};

export default blogs;