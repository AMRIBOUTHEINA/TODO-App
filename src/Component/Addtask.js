import React, {useState} from 'react';
import {v1 as uuid, v1} from 'uuid';
import {useDispatch} from 'react-redux';
import { addTodo } from '../Redux/actions';


 const Addtask = () => {
     let   [description, setDescription] = useState()
     let  dispatch = useDispatch()
    return (
        <div>
        <div className="add">
        
            <input type="text"
            className="input_add"
            value={description}
            placeholder="Any thing to do ?"
            onChange={(e)=>setDescription(e.target.value)}
            
            />
            <button className="btn_add"   
            onClick={()=> {dispatch(addTodo (
                {
                    id:uuid(),
                    completed: false,
                    description:  description 
                } // send  description to store
            )
            );
            setDescription('');//to clean input
        }}> Add</button>
       
        </div>
        </div>
    )
}
export default Addtask;