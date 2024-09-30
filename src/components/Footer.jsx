import React from "react";

const Footer = () => {

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Company Name</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="javascript:void(0)" className="hover:text-gray-300 transition duration-300">Web Design</a></li>
                            <li><a href="javascript:void(0)" className="hover:text-gray-300 transition duration-300">App Development</a></li>
                            <li><a href="javascript:void(0)" className="hover:text-gray-300 transition duration-300">SEO Optimization</a></li>
                            <li><a href="javascript:void(0)" className="hover:text-gray-300 transition duration-300">Digital Marketing</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="javascript:void(0)">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="javascript:void(0)">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="javascript:void(0)">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Newsletter</h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for newsletter"
                            />
                        </div>
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                            aria-label="Subscribe to newsletter"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; 2023 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;