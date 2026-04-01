import React from 'react';
import { FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="mt-40 bg-[#07122B] text-white">
            <div className="w-10/12 mx-auto py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
                    <div className="md:col-span-1">
                        <h2 className="text-5xl font-bold tracking-wide">DigiTools</h2>
                        <p className="mt-3 max-w-65 text-sm leading-6 text-[#AAB6CF]">
                            Premium digital tools for creators, professionals, and businesses. Work smarter
                            with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Product</h3>
                        <ul className="space-y-2 text-sm text-[#AAB6CF]">
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Templates</a></li>
                            <li><a href="">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-[#AAB6CF]">
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Resources</h3>
                        <ul className="space-y-2 text-sm text-[#AAB6CF]">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Community</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Social Links</h3>
                        <div className="flex items-center gap-3">
                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#07122B]">
                                <FaYoutube  />
                            </button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#07122B]">
                                <FaFacebookF  />
                            </button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#07122B]">
                                <FaXTwitter   />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-14 border-t border-[#1E2D4F] pt-6 text-sm text-[#8FA1C4] md:flex md:items-center md:justify-between">
                    <p> &copy; 2026 Digitools. All rights reserved.</p>
                    <div className="mt-4 flex gap-6 md:mt-0">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;