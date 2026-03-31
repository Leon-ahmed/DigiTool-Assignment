import React, { use } from 'react';
import ServiceTool from './ServiceTool';
const Tools = ({ToolPromise}) => {

       const Data= use(ToolPromise);
    return (

     
        <div class=" w-10/12 mx-auto   grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3   gap-8">
            

        {Data.map(Tool=><ServiceTool key={Tool.id}  Tool={Tool}></ServiceTool>)}




        </div>

       
    );
};

export default Tools;