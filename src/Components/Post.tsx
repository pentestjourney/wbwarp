// Post.tsx
import React from 'react';

interface PostProps {
    postId: number; // Unique identifier for the post for deletion
    title: string;
    content: string;
    contact: string;
    onDelete: (postId: number) => void; // Function to call when deleting a post
}

const Post: React.FC<PostProps> = ({ postId, title, content, contact, onDelete }) => {
    // Function to confirm deletion before proceeding
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            onDelete(postId);
        }
    };

    return (
      <div className="post font-sans bg-white rounded-lg overflow-hidden mb-6">
    <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{content}</p>
        <a href={`mailto:${contact}`} className="text-indigo-500 hover:text-indigo-600 transition duration-200 ease-in-out">{contact}</a>
    </div>
    <div className="px-6 pt-4 pb-2">
        <button 
            onClick={handleDelete} 
            className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded transition ease-in-out duration-200"
        >
            Delete
        </button>
    </div>
</div>

  
    );
};

export default Post;







