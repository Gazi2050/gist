"use client"

import React from 'react';
import Editor from './Editor';
import Input from './Input';

const GistForm = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-5 mx-2 md:mt-10 font-mono">
            <h1 className="text-2xl md:text-3xl font-bold text-violet-400 mb-4 text-center">
                Create a New Gist
            </h1>
            <div className="w-full max-w-2xl">
                <Input />
                <Editor language='java' code='' />
            </div>
        </div>
    );
};

export default GistForm;
