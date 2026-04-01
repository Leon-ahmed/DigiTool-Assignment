import React from 'react';
import user from "../../assets/user.png"
import pac from "../../assets/package.png"
import rocket from "../../assets/rocket.png"
const Guide = () => {
    return (
       <div class="bg-[#F9FAFC] mt-40">
          
           <div class="w-10/12 mx-auto py-30 ">
            <div class="text-center">
                <h1 class=" text-[40px] md:text-[48px] text-[#101727] font-extrabold">Get Started in 3 Steps</h1>
                <p class="text-[#627382] pb-10">Start using premium digital tools in minutes, not hours.</p>

            </div>
            <div>

             
             <div className='Card grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7  '>
              
                <div class="max-w-95  bg-white rounded-md shadow-sm p-6 space-y-4 flex flex-col text-center items-center">
                    <div class="w-full flex justify-end "><div class="w-10 h-10  rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center "><p>01</p></div></div>
                    <div class="w-25 h-25  bg-linear-to-r from-[#4f39f62d] to-[#9614fa31] rounded-full flex justify-center items-center"><img src={user} alt="" /></div>
                    <p class="font-bold text-2xl text-[#101727]">Create Account</p>
                    <p class="text-[#627382]">Sign up for free in seconds. No credit card <br /> required to get started.</p>



                </div>

                <div class="max-w-95 bg-white rounded-md shadow-sm p-6 space-y-4 flex flex-col  text-center items-center">
 <div class="w-full flex justify-end "><div class="w-10 h-10  rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center "><p>02</p></div></div>
                    <div class="w-25 h-25  bg-linear-to-r from-[#4f39f62d] to-[#9614fa31] rounded-full flex justify-center items-center"><img src={pac} alt="" /></div>
                    <p class="font-bold text-2xl text-[#101727]">Choose Products </p>
                    <p class="text-[#627382]">Browse our catalog and select the tools <br />that fit your needs.</p>



                </div>
                
                <div class="max-w-95 bg-white rounded-md shadow-sm p-6 space-y-4 flex flex-col  text-center items-center">
                    <div class="w-full flex justify-end "><div class="w-10 h-10  rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center "><p>03</p></div></div>
                    <div class="w-25 h-25  bg-linear-to-r from-[#4f39f62d] to-[#9614fa31] rounded-full flex justify-center items-center"><img src={rocket} alt="" /></div>
                    <p class="font-bold text-2xl text-[#101727]">Start Creating</p>
                    <p class="text-[#627382]">Download and start using your premium <br /> tools immediately.</p>



                </div>






             </div>








            </div>
        </div>






       </div>
    );
};

export default Guide;