
import React , { useState } from 'react';
import Sresult from './Sresult';

const Search=()=>{
const [ img, setImg]= useState("");
const Danish=(event)=> {
const data= event.target.value;
// console.log();
 setImg(data);
 }

return(
<>
<div classname="searchbar">
<input type="text" placeholder="serch any thig"value={img}
onchange={Danish}/>
{img ===""? null: <Sresult name={img}/>}
</div></>
);
};
export default Search;