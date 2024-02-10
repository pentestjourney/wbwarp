import React, { useState } from 'react';

interface CreatePostProps {
    onAdd: (post: Omit<PostItem, 'key'>) => void;
}

interface PostItem {
    title: string;
    content: string;
    contact: string;
}

const CreatePost: React.FC<CreatePostProps> = ({ onAdd }) => {
    const [post, setPost] = useState<PostItem>({ title: "", content: "", contact: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Function to validate the form fields
    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!post.title) {
            newErrors.title = "Title is required";
        }
        if (!post.content) {
            newErrors.content = "Content is required";
        }
        if (!post.contact) {
            newErrors.contact = "Contact is required";
        } else if (!/\S+@\S+\.\S+/.test(post.contact)) {
            newErrors.contact = "A valid email is required";
        }

        setErrors(newErrors);
        // Form is valid if there are no entries in the errors object
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
        // Clear error for a field when it's edited
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            onAdd(post);
            setPost({ title: "", content: "", contact: "" }); // Reset form after submission
        }
    };

    return (
        <div className='bg-white text-gray-900 font-sans rounded-lg shadow-md overflow-hidden my-8 mx-auto max-w-lg'>
    <div className="p-6">
        <h2 className="text-2xl font-semibold mb-5">Create Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                    name="content"
                    value={post.content}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write a post..."
                    rows={5}
                />
                {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="text"
                    name="contact"
                    value={post.contact}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email"
                />
                {errors.contact && <p className="mt-1 text-sm text-red-600">{errors.contact}</p>}
            </div>
            <button type="submit" className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                Add Post
            </button>
        </form>
    </div>
</div>

    );
};

export default CreatePost;



