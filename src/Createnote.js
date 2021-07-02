import React, { useState }  from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const Createnote =(props)=>{
    const [note, setNote]= useState({
        title :"",
        content :"",
    });

    const InputEvent =(event)=>{
      const {name, value}= event.target.value
        setNote ((prevData) =>{
            return{
                ...prevData , 
                [name] : value,
            }
        })
    }
    const addEvent =()=>{
       props.addEvent(note);

    }
    return(
    <>
    <div className="main_note" >
    <form>
        <input type="text" className="text" name="title"value={note.title} onClick={InputEvent} placeholder="Tittle"/>
        <textarea  rows="" column="" className="dan" name="content" value={note.content} onClick={InputEvent} placeholder="write a text"/>
        <Button onClick={addEvent} >
         <AddIcon className="add_sign" />
        </Button>
    </form>
    </div>
    
    </>
    )
}

export default Createnote;