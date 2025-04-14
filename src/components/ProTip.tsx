import { Lightbulb } from 'lucide-react';
import React from 'react';

const ProTip = () => {
    return (
        <div className="ml-1 flex items-center text-sm">
            <div className="bg-zinc-800/60 rounded-full p-2 mr-3">
                <Lightbulb className="w-4 h-4 text-violet-500" />
            </div>
            <span className='text-zinc-500'>
                <strong>ProTip:</strong> Format your gist before publishing it.
            </span>
        </div>
    );
};

export default ProTip;