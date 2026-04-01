import React from 'react';
import { FaCheck } from "react-icons/fa6";
const Pricing = () => {
    return (
        <div className='w-10/12 mx-auto my-40'>
            <div className='text-center space-y-4'>
                  <h2 className="text-5xl font-extrabold text-[#101727]">Simple, Transparent Pricing</h2>
                    <p className="text-[#627382] pb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>



            <div className="card grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7">
                  

                    <div className='max-w-98  p-6 space-y-6 border rounded-xl border-gray-200 bg-[#F9FAFC] shadow-sm '>
                 <div>
                    <h4 className='text-2xl  font-bold'>Starter</h4>
                    <p>Perfect for getting started</p>
                 </div>
                 <div>
                    <p className='text-[#101727] text-4xl font-bold'>$0 <span className='text-[#627382] font-normal text-[20px]'>/Month</span></p>
                 </div>


                 <div className='text-[#627382] h-40'>
                    <ul>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Access to 10 free tools</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Basic templates</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Community support</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />1 project per month</li>
                       



                    </ul>




                 </div>
                  <a class="btn w-full rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold   ">Get Started</a>


            </div>



               <div className='max-w-98 p-6 space-y-6 border relative  text-white rounded-xl border-gray-200 bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
                 <div>
                    <div className='bg-[#FEF3C6] rounded-full  absolute  -top-4 right-25 sm:right-20 md:right-30 max-w-32 px-3 py-1.5'><p className='text-[#BB4D00]'>Most Popular</p></div>
                    <h4 className='text-2xl  font-bold'>Pro</h4>
                    <p>Best for professionals</p>
                 </div>
                 <div>
                    <p className=' text-white text-4xl font-bold'>$29 <span className='font-normal text-[20px]'>/Month</span></p>
                 </div>


                 <div className='text-white h-40'>
                    <ul >
                        <li className='flex gap-1 items-center'> <FaCheck class="text-white" />Access to all premium tools</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-white" />Unlimited templates</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-white" />Priority support</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-white" />Unlimited projects</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-white" />Cloud sync</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-white" />Advanced analytics</li>
                       



                    </ul>




                 </div>
                <div className='bg-white rounded-full'>  <a className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent   font-bold">Start Pro Trial</a></div>


            </div>



              <div className='max-w-98  p-6 space-y-6 border rounded-xl border-gray-200 bg-[#F9FAFC] '>
                 <div>
                    <h4 className='text-2xl  font-bold'>Enterprise</h4>
                    <p>For teams and businesses</p>
                 </div>
                 <div>
                    <p className='text-[#101727] text-4xl font-bold'>$99 <span className='text-[#627382] font-normal text-[20px]'>/Month</span></p>
                 </div>


                 <div className='text-[#627382] h-40'>
                    <ul>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Everything in Pro</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Team collaboration</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Custom integrations</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Dedicated support</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />SLA guarantee</li>
                        <li className='flex gap-1 items-center'> <FaCheck class="text-green-400" />Custom branding</li>
                       



                    </ul>




                 </div>
                  <a class="btn w-full rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold   ">Get Started</a>


            </div>









            </div>




          
        </div>
    );
};

export default Pricing;