import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div >
                Gist
            </div>
            <div>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>About Us</Link>
                <Link href={'/'}>COntact</Link>
            </div>
            <div>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;