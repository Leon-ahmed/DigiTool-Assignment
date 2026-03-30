import React, { use } from 'react';
import ServiceTool from './ServiceTool';
const Tools = ({ToolPromise}) => {

       const Data= use(ToolPromise);
    return (

     
        <div>
            

        {Data.map(Tool=><ServiceTool key={Tool.id}  Tool={Tool}></ServiceTool>)}




        </div>

       
    );
};

export default Tools;