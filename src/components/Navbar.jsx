import Link from 'next/link';
import React from 'react';
import AuthHandler from './AuthHandler';

const Navbar = () => {

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo on the left */}
                <div className="text-white font-bold text-xl">
                    <h1 className="text-3xl font-bold">
                        <Link href="/">
                            <span className="text-yellow-400">Quote</span> Master
                        </Link>
                    </h1>
                </div>

                {/* Sign In and Sign Out buttons on the right */}
                <AuthHandler />
            </div>
        </nav>
    );
};

export default Navbar;
