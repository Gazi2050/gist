import { useState } from 'react';

const Input = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className=" text-gray-100 p-6 space-y-6 font-mono">
            {/* Input Field */}
            <div className="space-y-1">
                <label htmlFor="title" className="block text-sm font-semibold text-gray-300">Title</label>
                <div className="relative">
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength="100"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a title..."
                    />
                    {/* Character count for input */}
                    <div className="absolute  right-2 text-xs text-gray-500">
                        {title.length}/100
                    </div>
                </div>
            </div>

            {/* Textarea Field */}
            <div className="space-y-1">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-300">Description</label>
                <div className="relative">
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength="100"
                        rows="5"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Write something..."
                    ></textarea>
                    {/* Character count for textarea */}
                    <div className="absolute  right-2 text-xs text-gray-500">
                        {description.length}/100
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;