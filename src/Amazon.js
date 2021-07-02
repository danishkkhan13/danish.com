import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Amazon =()=> {
    return(
        <Card
        key={Sdata[0].id} 
        imgscr={Sdata[0].imgscr}
        title={Sdata[0].title}
         sname={Sdata[0].sname}
         link={Sdata[0].links}
         />
    );
    }
    export default Amazon;