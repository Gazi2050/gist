"use client"

import React from 'react';
import Editor from './Editor';
import Input from './Input';

const GistForm = () => {
    return (
        <div className='mx-auto'>
            <Input />
            <Editor language='java' code='' />
        </div>
    );
};

export default GistForm;