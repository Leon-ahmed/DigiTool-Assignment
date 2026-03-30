import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100    w-10/12 mx-auto    flex-col  md:flex-row   items-center gap-2 ">
  <div class="navbar-start relative w-full flex justify-center  md:w-6/12 md:justify-start ">
    <div class="dropdown absolute left-0 md:static ">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm font-bold  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a class="  font-bold text-3xl      bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal font-bold px-1">
      
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      
       
      
    </ul>
  </div>
  <div class="navbar-end space-x-4  flex flex-col-reverse gap-2  mt-4  md:flex-row md:mt-0 ">
    <p class="flex  items-center  gap-2  font-semibold"><CiShoppingCart /><a>Login</a></p>
    <a class="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold ">Get Started</a>
  </div>
</div>
<hr class="border-b border-gray-100 " />
        </div>
       
    );
};

export default Navbar;