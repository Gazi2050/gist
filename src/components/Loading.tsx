import { LoaderCircle } from 'lucide-react';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-72 lg:my-96 '>
            <LoaderCircle size={60} className='animate-spin' />
        </div>
    );
};

export default Loading;