import { InputProps } from "@/constants/type";

const Input: React.FC<InputProps> = ({ title, setTitle, description, setDescription }) => {
    const TITLE_LIMIT = 30;
    const DESCRIPTION_LIMIT = 200;

    return (
        <div className="space-y-4 font-mono text-gray-100 mb-5">
            {/* Title Input */}
            <div className="space-y-1">
                <label htmlFor="title" className="block text-base font-semibold text-gray-300 ml-1">Title</label>
                <div className="relative">
                    <input
                        required
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={TITLE_LIMIT}
                        placeholder="Enter a title..."
                        className="w-full px-4 py-3 text-violet-300 bg-zinc-900 resize-none outline-none text-sm leading-[1.5em] overflow-auto border border-gray-700 rounded-md"
                    />
                    <div className="absolute right-2 mt-1 text-sm text-gray-500">
                        {title.length}/{TITLE_LIMIT}
                    </div>
                </div>
                {title.length === TITLE_LIMIT && (
                    <p className="text-sm text-red-500 mt-2 ml-1">Title has reached the maximum length.</p>
                )}
            </div>

            {/* Description Textarea */}
            <div className="space-y-1">
                <label htmlFor="description" className="block text-base font-semibold text-gray-300 ml-1">Description</label>
                <div className="relative">
                    <textarea
                        required
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={DESCRIPTION_LIMIT}
                        placeholder="Write something..."
                        className="w-full h-[100px] px-4 py-4 text-violet-300 bg-zinc-900 resize-none outline-none text-sm leading-[1.5em] overflow-auto border border-gray-700 rounded-md"
                    />
                    <div className="absolute right-2 -mt-1 text-sm text-gray-500">
                        {description.length}/{DESCRIPTION_LIMIT}
                    </div>
                </div>
                {description.length === DESCRIPTION_LIMIT && (
                    <p className="text-sm text-red-500 -mt-1 ml-1">Description has reached the maximum length.</p>
                )}
            </div>
        </div>
    );
};

export default Input;
