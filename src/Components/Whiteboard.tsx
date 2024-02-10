import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import favico from '../assets/favicon.ico';
import { FaRust, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { backend } from "../declarations/backend";

interface PostItem {
  key: number;
  title: string;
  content: string;
  contact: string;
}

interface WhiteboardProps {
  posts: PostItem[];
}

const Whiteboard: React.FC<WhiteboardProps> = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const backendPosts = await backend.readPost();
      const formattedPosts = backendPosts.map(post => ({
        key: Number(post.postId), // Convert bigint to number here
        title: post.title,
        content: post.content,
        contact: post.contact,
      }));
      setPosts(formattedPosts);
    };
  
    fetchPosts();
  }, []);
  

  const addPost = (newPost: Omit<PostItem, 'key'>) => {
    const newPostWithKey = { ...newPost, key: Date.now() };
    setPosts(prevPosts => [...prevPosts, newPostWithKey]);
    backend.createPost(newPost.title, newPost.content, newPost.contact);
  };

  const deletePost = (key: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.key !== key));
    // You may also want to add functionality to delete posts from the backend here
  };

  return (
    <div className="bg-white font-mono p-6 max-w-4xl mx-auto my-8">
      <div className="mb-8">
        <h1 className="text-lg sm:text-3xl font-bold text-center text-blue-950 mb-4">
          Developer Community Projects on Internet Computer
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-700">
          Join a project or start your own to innovate with developers worldwide.
        </p>
      </div>

      <div className="tech-logos flex justify-center gap-4 mb-8">
        <img src={favico} alt="Favicon" className="w-12 h-12" />
        <IoLogoJavascript className="text-yellow-400 w-12 h-12" />
        <FaPython className="text-blue-500 w-12 h-12" />
        <FaRust className="text-orange-700 w-12 h-12" />
        {/* Add other icons as needed */}
      </div>

      {posts.map((postItem) => (
        <Post
          key={postItem.key}
          postId={postItem.key}
          title={postItem.title}
          content={postItem.content}
          contact={postItem.contact}
          onDelete={deletePost}
        />
      ))}
      <CreatePost onAdd={addPost} />
    </div>
  );
};

export default Whiteboard;











