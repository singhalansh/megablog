import React,{useState,useEffect} from 'react'
import { Container, PostCard } from "../components";
import apppwriteService from "../appwrite/config";
function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        apppwriteService.getAllPosts([])
        .then((posts)=>posts?setPosts(posts.documents):setPosts([]));
    })
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

export default AllPosts