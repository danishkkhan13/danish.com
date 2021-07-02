import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Netflix =()=> {
    return(
        <Card
        key={Sdata[1].id} 
        imgscr={Sdata[1].imgscr}
        title={Sdata[1].title}
         sname={Sdata[1].sname}
         link={Sdata[1].links}
         />
    );
    }
    export default Netflix;