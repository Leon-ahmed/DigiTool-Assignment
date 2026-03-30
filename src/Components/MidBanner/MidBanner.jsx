import React from 'react';

const MidBanner = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-14 text-white">
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6 md:gap-0">
            <div className="w-full border-b md:border-r md:border-b-0">
                <ul><li className="text-5xl md:text-6xl font-bold md:font-extrabold mb-3 md:mb-5">50K+</li>
                <li>Active Users</li></ul>
                
            </div>
            <div className="w-full border-b md:border-r md:border-b-0" >
              <ul>  <li className="text-5xl md:text-6xl font-bold md:font-extrabold mb-3 md:mb-5">200+</li>
                <li>Premium Tools</li></ul>
            </div>
            <div className="w-full">
               <ul> <li className="text-5xl md:text-6xl font-bold md:font-extrabold mb-3 md:mb-5">4.9</li>
                <li>Rating</li></ul>
            </div>




            </div>
        </div>
    );
};

export default MidBanner;