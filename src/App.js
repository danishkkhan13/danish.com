import React  from 'react';
// import Statewise from './Components/stateWise.Data/Statewise';
// import ComA from "./ComA";
// import { Route,Switch,Redirect} from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// // import Error from './Error';
import Navbar from './Navbar';
// import Service from './Service';
// import User from './User';
// import Search from './Search';
// import Sresult from './Sresult';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import { Switch, Route,Redirect} from 'react-router-dom';
import Footer from './Footer';
// const  FirstName = createContext();
// const  LastName  =  createContext();
const App =()=>{
//  const Name=()=>{
//   return
//     <h1>My name is Danishh</h1>;
  
// };
  return(
  <>
  <Navbar/>
  <Switch>
    <Route  exact path="/" component={Home}/>
    <Route  exact path="/About" component={About}/>
    <Route  exact path="/Service" component={Service}/>
    <Route  exact path="/Contact" component={Contact}/>
    <Redirect to="/"/>
  </Switch>
  <Footer/>
  </>
  // {/* <Navbar/>
  // <Switch>
  //   <Route exact path="/" render={()=><About name='About'/>}/>
  //   <Route exact path="/Service" render={()=><Service name='Service gfdgdhhdh'/>}/>
  //   <Route exact path="/Contact" component={Contact}/>
  //   <Route exact path="/Search" component={Search}/>
  //   <Route exact path="/Sresult" component={Sresult}/>
  //   <Route path="/Contact/Name" component={Name}/>
  //   <Route path="/User/:fname/:lname" component={User}/>
  //   {/* <Route component={Error}/>*/}
  //   {/* <Redirect to="/"/>
  // </Switch> */}
  //      {/* <About/>
  //      <Contact/> */} 
     
  );
};
export default App;
// const [num,setNum]= useState(0);
//   useEffect(()=>{
//     //    alert('heyy')
//     document.title=`you clicked me ${num} times`
//   })
//     return(
//         <>
//         <button onClick={()=>{
//             setNum(num+1);
//         }
//         }>Click me{num}</button>

        
//         </>
//     );
//     };
// // // import SlotMachine from './SlotMachine';

// // import ReactDOM from 'react-dom';
// // import Sdata from './Sdata';
// // import Netflix from './Netflix';
// // import Amazon from './Amazon';


// // const FavS =() =>{
// //     if (favSeries ==='netflix'){
// //         return <Netflix/>;
// // }else{
// //     return <Amazon/>;
// // }
// // };

// // const App =()=>{
// //     let time= new Date().toLocaleTimeString();
// // //    const state = useState();  
  
// // //   const [count, setcount] = useState(0);

// // const [ctime , setCtime] = useState(time);
// // // const IncNum =()=>{
// //     // set
// //     // count(count + 1);
// //     // console.log("clicked" + count++);
// // // };
// // const UpdateTime =()=>{
// // time= new Date().toLocaleTimeString();
// // setCtime(time);
// // };
// // setInterval(UpdateTime,1000);

// //     return(
// //     <><h1> {ctime} </h1>
// //     {/* <button onClick={UpdateTime}>get time</button> */}
// //     {/* <button onClick={IncNum}> Click me </button> */}
// // </>
// //     )
// // };
// const App =()=>{ 
//     const [name , setName]=useState();
//     const [fullName,setFullName]=useState({
//         fname:"",
//         lname:"",
//         email:"",
//         phone:"",
//         qua:"",
//     });
//     // const [fullName, setFullName]=useState();
//     // const[Lastname, setLastname]=useState();
//     // const [lastnamenew,setlastnamenew]=useState();
// // const Danish="#8e44ad";
// // const [bg , setBg]= useState(Danish);
// // const [ name , setName] = useState("clickme");


// // const bgChange =()=>{
// //     let newbg ="#34495e";
// //     setBg(newbg);
// //     setName("🍉welcome");
// // };
// // const bgBack =()=>{
// //     setBg(Danish);
// //     setName("Welcome to new ");
// // };
// const inputEvent =(event)=>{
//     console.log(event.target.value);
//     console.log(event.target.name);
  
//   const{value,name}= event.target;
//     // const value= event.target.value;
//     // const name= event.target.name;
//     // setName(event.target.value);
// // const inputEventTwo=(event)=>{
//     //   setLastname(event.target.value);
// // }
// setFullName((prevalue) => {
//     console.log(prevalue);
//     return{
//         ...prevalue,
//         [name]: value,
        
//     }
// //     if(name==="fname"){
// //         return{
// //             fname: value,
// //             lname: prevalue.lname,
// //             email: prevalue.email,
// //             phone: prevalue.phone,

// //         };
// //         }
// //          else if(name==="lname"){
// //             return{
// //                 fname: prevalue.fname,
// //                 lname: value,
// //              email: prevalue.email,
// //              phone: prevalue.phone,
// //             };
// //     }else
// //      if(name==="email"){
// //         return{
// //             fname: prevalue.fname,
// //             lname: prevalue.lname,
// //             email: value,
// //             phone: prevalue.phone,
         
// //         };
// // }else if(
// //     name==="phone"){
// //     return{
// //         fname: prevalue.fname,
// //         lname: prevalue.lname,
// //         email: prevalue.email,
// //         phone: value,
         
// //     };
// // }

// });
// };
// const onSubmit=(event)=>{
//     event.preventDefault();
//     alert("form submited");
// // setFullName(name);
// // setlastnamenew(Lastname);
// };
// return(
//     <>
//     <div style={{backgroundColor: '#8e44ad'}}>
//         <form onSubmit={onSubmit}>
//         <h1>Hello {fullName.fname}{fullName.lname}</h1>
//         <p>{fullName.email}</p>
//         <p>{fullName.phone}</p>
//     <input className="Danish" type="text" placeholder="Enter your name" 
//     onChange={inputEvent}
//     name="fname"
//     value ={fullName.fname}
//     />
//       <br/>
//       <input className="Danish" type="text" placeholder="Enter your last name" 
//     onChange={inputEvent}
//     name="lname"
//     value ={fullName.lname}
//     />
//     <br/>
//     <input className="Danish" type="text" placeholder="Enter your email" 
//     onChange={inputEvent}
//     name="email"
//     value ={fullName.email}
//     />
//     <br/>
//     <input className="Danish" type="text" placeholder="Enter your phone" 
//     onChange={inputEvent}
//     name="phone"
//     value ={fullName.phone}
//     />
//     <br/>
//     <input className="Danish" type="text" placeholder="Enter your qualification" 
//     onChange={inputEvent}
//     name="qua"
//     value ={fullName.qua}
//     />
  
//     <button type="submit">click </button>
//            </form>
//     </div>
//     </>
// );
// };
// import React, { useState } from 'react';
// // import AddIcon from '@material-ui/icons/Add';
// // import MinimizeIcon from '@material-ui/icons/Minimize';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header';
// import Footer from './Footer';
// import Createnote from './Createnote';
// import Note from './Note';
// // import '../node_modules/bootstr'
// const App=()=>{
//     const[AddItem, setAddItem]=useState([]);
//     const addNote=(note)=>{
//     // alert('heey')
//     setAddItem((prevData)=>{
//     return[...prevData,note];
//     })
//     console.log(note);
//     };

    // const[num,setnum]= useState(0);
    // const IncNum =()=>{
    //     setnum(num+1);
    // };
    // const Dcrm=()=>{
    //     if(num>0){
    //         setnum(num-1);
    //     }else{
    //         alert('sorry,zero limit ')
    //         setnum(0);
    //     }
    // };
//     return<>
//     <Header/>
//     <Footer/>
//     <Createnote passNote={addNote}/>
//     <Note/>
//     </>
// //         <React.Fragment>
//         {/* <div className="main_div">
//             <div className="centre_div">
//             <div className="container"> */}
//             <h1 className="text-center text-danger text-capitalize">khan danish</h1>
//   <div className="row">
//     <div className="col-sm"><div class="card" >
//   <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/> <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm"> <div class="card" >
//   <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/> <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm"> <div class="card" >
//   <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px"/> <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   </div>
// {/* </div> */}
//                 {/* <h1 >{num}</h1>
//                 <div className="btn">
//                     <button className= "btn btn-success"onClick={IncNum}> <AddIcon/> </button>
//                     <button className= "btn btn-success"onClick={Dcrm}><MinimizeIcon/></button>
//                 </div> */}
//             {/* </div> */}
//          {/* </div> */}
//         </React.Fragment>
// };


// export  { FirstName,LastName};
