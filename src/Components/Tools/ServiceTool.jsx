import React from 'react';
import { FaCheck } from "react-icons/fa6";
const ServiceTool = ({Tool}) => {
    console.log(Tool)
    return (
        <div class="mt-10">
                <div class="max-w-80 sm:max-w-85 md:max-w-90 px-6 pb-6  shadow-sm  border border-gray-100 rounded-xl   ">

                 
        <div class="flex flex-row justify-between pt-6 ">
            <div class="w-15 h-15 border border-gray-200 rounded-full flex justify-center items-center   ">  <img src={Tool.icon} class="w-8 h-8" alt="" /></div>
         
           <div class="rounded-full max-w-23.75 bg-accent  my-4 px-2 text-white relative  ">{Tool.tag}</div>

        </div>



        <div class="pb-4 space-y-4">
           <p class="text-[20px] md:text-[24px] font-bold text-[#101727 pt-8">{Tool.name}</p>
           <p class="text-[#627382]">{Tool.description}</p>
           <p class="text-[24px] text-[#101727] font-bold">$ {Tool.price} <span class="text-[#627282] text-[16px] font-normal ">/{Tool.period}</span>  </p>



        </div>
         <div>
           <ul>
                        {Tool.features?.map((feature, index) => (
                           <div class="flex gap-1 items-center text-[#627382] "> <FaCheck class="text-green-400" />
                            <li  key={index}>{feature}</li></div> 
                        ))}
           </ul>

         </div>

         <button class="btn w-full  mt-4 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold  transition-all duration-200 ease-out transform hover:scale-108 hover:-translate-x-0.5 hover:shadow-sm  hover:bg-none hover:bg-primary" >Buy Now</button>










                </div>
        
        </div>
    );
};

export default ServiceTool;