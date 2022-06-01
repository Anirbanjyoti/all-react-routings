import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data =>setPost(data))
    }, [postId])
    return (
        <div>
            <h2>Post Details of : {postId}</h2>
            <h3>Post title: {post.title}</h3>
            <p>Post Details: {post.body}</p>
        </div>
    );
};

export default PostDetails;