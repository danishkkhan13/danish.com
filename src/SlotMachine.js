import React from 'react';

const SlotMachine=(props)=>{
         let x=" 😄";
         let y= "";
         let z= "😼";
        if (x===y && y===z){
            return(
                <>
                <div>
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is maching</h1>
                  <hr/>
                </div>
                </>
            )
        }else{
            return(
                <>
                <div>
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is not maching</h1>
                  <hr/>
                </div>
                </>
            )
    
        }
    };
    
    export default SlotMachine;