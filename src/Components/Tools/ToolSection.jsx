import React, { useState } from 'react';

const ToolSection = ({ activeTab, setActiveTab, cartCount }) => {

    return (
        <div class="w-10/12 mx-auto text-center space-y-4 mt-28">
            <h1 class="text-5xl font-extrabold text-[#101727]">Premium Digital Tools</h1>
            <p class="text-[#627382]">Choose from our curated collection of premium digital products designed
to boost your productivity and creativity.</p>
            <div className="inline-flex items-center rounded-full border border-[#e5e6ec] bg-[#ffffff] p-1   ">
                            <button
                                onClick={() => setActiveTab('products')}
                                className={` px-3 py-2 rounded-full font-medium ${
                                        activeTab === 'products'  ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ' '
                                }`}
                            >
                                Products
                            </button>
                            <button
                                onClick={() => setActiveTab('carts')}
                                className={`px-3 py-2  rounded-full ${
                                        activeTab === 'carts'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white': ' '
                                }`}
                            >
                                Cart {cartCount > 0 ? `(${cartCount})` : ''}
                            </button>
            </div>
        </div>
    );
};

export default ToolSection;















