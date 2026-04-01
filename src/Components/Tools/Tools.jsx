import React, { use, useEffect, useState } from 'react';
import ServiceTool from './ServiceTool';
const Tools = ({ ToolPromise, activeTab, cartItems, onAddToCart, onRemoveFromCart }) => {

       const Data = use(ToolPromise);
       const [visibleCartItems, setVisibleCartItems] = useState(cartItems);

       useEffect(() => {
              setVisibleCartItems(cartItems);
       }, [cartItems]);

    return (

     
        <div className="w-10/12 mx-auto mt-10">
            {activeTab === 'products' ? (
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Data.map((Tool) => (
                        <ServiceTool key={Tool.id} Tool={Tool} onAddToCart={onAddToCart}></ServiceTool>
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-[#e5e6ec] bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#101727] mb-5 text-center">Your Cart</h2>

                    {visibleCartItems.length === 0 ? (
                        <p className="text-[#627382]">No product is selected</p>
                    ) : (
                        <>
                            <div className="space-y-3">
                                {visibleCartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between rounded-xl bg-[#f8f9fd] px-4 py-3"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center border border-[#eceef5]">
                                                <img src={item.icon} alt={item.name} className="h-6 w-6" />
                                            </div>
                                            <div className="text-left">
                                                <p className="font-medium text-[#101727]">{item.name}</p>
                                                <p className="text-sm text-[#627382]">${item.price}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => onRemoveFromCart(item.id)}
                                            className="text-sm font-medium text-[#ff4d7d]"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between border-t border-[#eef0f5] pt-4">
                                <p className="text-[#627382]">Total:</p>
                                <p className="text-2xl font-bold text-[#101727]">
                                    ${visibleCartItems.reduce((total, item) => total + item.price, 0)}
                                </p>
                            </div>

                            <button className="mt-6 w-full rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  py-3 font-medium text-white">
                                Proceed To Checkout
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>

       
    );
};

export default Tools;