import React from 'react'
import { useParams, useLocation, useHistory} from 'react-router-dom'

const User = () => {
    const {fname,lname}= useParams();
    const location= useLocation();
    const history = useHistory();
    console.log(location);
    return (
        <>
       <h1>React  {fname} {lname} js</h1>
       <h2> my current location{location.pathname}</h2>
       {location.pathname===`/User/Danish/Khan` ?(
           <button onClick={()=> alert(`you awsome`)}>Click me </button>
       ):null}
       </>
    )
}

export default User
