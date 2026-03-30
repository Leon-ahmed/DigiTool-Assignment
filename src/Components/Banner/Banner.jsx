import React from 'react';
import bannerImage from '../../assets/banner.png';
import playBtn from "../../assets/Play.png"
const Banner = () => {
    return (
        <div>
            <div class="w-10/12 mx-auto flex flex-col md:flex-row justify-between my-7 md:my-14">

                <div class="space-y-4 my-12  md:my-24">

                    <div class="bg-[#E1E7FF] w-70 rounded-full flex  pl-2    relative ">

                        <div class="w-4 h-4 absolute   rounded-full top-1/2   -translate-y-1/2 bg-linear-to-r from-[#4f39f650] to-[#9614fa3b]" >
                            <div class="w-3 h-3 absolute   rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-[#4f39f680] to-[#9614fa79]">
                                <div class="w-1.5 absolute   h-1.5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-[#4F39F6] to-[#9514FA]"></div>
                            </div>
                        </div>

                        <div class=" font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent relative z-10 pl-6">New: AI-Powered Tools Available</div>
                    </div>

                    <h1 class=" text-3xl      sm:text-4xl    md:text-5xl lg:text-5xl font-extrabold text-[#101727] ">Supercharge Your <br /> Digital Workflow</h1>
                    <p class="text-[#627382] text-[18px]">Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>

                  <div class=" flex flex-col gap-2 sm:flex-row  ">

                    <button class="btn   bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full">Exlpore Products</button>
                    <button class="btn btn-primary font-bold btn-outline rounded-full"><img src="" alt="" /><img src={playBtn} alt="" />Watch Demo</button>
                  </div>

                       

                </div>
                <div><img src={bannerImage} alt="" /> </div>











            </div>
        </div>
    );
};

export default Banner;