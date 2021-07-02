import React  from 'react';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"; 

const Note =()=>{
    return<>(
        <div className="note">
            <h1>Title</h1>
            <p1>this is conntent</p1>
            <button>
                <DeleteOutlineIcon className="del"/>
            </button>
        </div>
    )
    
    </>

}

export default Note;