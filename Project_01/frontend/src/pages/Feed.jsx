import React, { useState, useEffect } from 'react'
import AddPost from '../components/AddPost';
import axios from "axios";


const Feed = () => {

    const [posts, setPosts] = useState([
        {
            image: "https://ik.imagekit.io/harshai3050/image_-tin7kgkt.jpg",
            caption: "there is nothing here!!"
        },
    ]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res)=> {
            setPosts(res.data.posts);
        },[])
    })


    return (

        <>
            <div className='w-100vw flex justify-center mx-5'>
                <div className='bg-white fixed min-w-full sm:min-w-[35%] z-10 px-6'>
                    <AddPost count={posts.length} />
                </div>
            </div>
            <div className='w-100vw h-full flex justify-center mx-5 py-16 '>
                <section className=' min-w-full sm:min-w-[35%] sm:max-w-[35%] min-h-100vh relative'>

                    {posts.map((post, index) => {
                        return (
                            <div key={index} className='p-5 bg-gray-100 rounded-2xl mb-10'>
                                <div className='h-12.5 flex items-center ml-2'>
                                    <span className='h-full bg-amber-50 flex items-center justify-center w-12.5 rounded-full'>PFP</span>
                                    <div className='ml-4'>
                                        <p>Anonymous</p>
                                        <p className='text-xs'>No time record</p>
                                    </div>
                                </div>

                                <div className='my-3'>
                                    <img src={post.image} alt="" />
                                </div>

                                <span>{post.caption}</span>
                            </div>
                        );
                    })}
                </section>
            </div>
        </>
    )
}

export default Feed