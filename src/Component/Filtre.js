import React from 'react';
import { vesibtodos } from '../Redux/actions';
import {  useDispatch } from "react-redux";
export const Filtre = (todos) => {
  const dispatch = useDispatch();
  const hundlefilre=(e)=>{
      //console.log(e.target.id)
      dispatch(vesibtodos(e.target.id))
  }
    return (
        <div className="todos_filter">

       
            
            <li  id="all" style={{textDecoration:"underline" }} 
            onClick ={hundlefilre}
            > All </li>
            <li  id="done" style={{textDecoration:"underline", marginLeft:20}} 
            onClick ={hundlefilre} > Done </li>
            <li id="undone" style={{textDecoration:"underline", marginLeft:20}}  
            onClick ={hundlefilre}
            > notDone </li>
             
             
            
        </div>
    )
}