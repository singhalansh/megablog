import React, { useEffect, useState } from 'react'
import { Container } from '../components';
import appwriteService from '../appwrite/config';
import PostCard from '../components/PostCard';

function Home() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        appwriteService.getAllPosts([]).then((posts)=>posts?setPosts(posts.documents):null);
    },[])
    if(!posts.length){
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-1/2 p-4'>
                            <h1 className='text-2xl font-bold'>Login karle bhai</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='w-full lg:w-1/2 p-4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home