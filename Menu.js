import React, { useState } from 'react'
import './menu.css';
import Menulist from './Menulist';
import Card from './Card';
const Menu = () => {
  const[list,setList]= useState(Menulist);


  const select=(category)=>{
    const updated= Menulist.filter((curElem)=>{ //Fliter method  takes all values from a provided array that meets set criteria and enters them into a new array.

        return curElem.category===category;
   
    }
    )
    setList( updated);

  };
  
  return (
    <>
    <div className='menu'>
      <ul>
        <li onClick={()=>select("Breakfast")}>Breakfast</li>
        <li onClick={()=>select("Lunch")}>Lunch</li>
        <li onClick={()=>select("Dinner")}>Dinner</li>
        <li onClick={()=>select("Drinks")}>Drinks</li>
        <li onClick={()=>select("Sweets")}>Sweets</li>
        <li onClick={()=>select("Salads")}>Salads</li>
        <li onClick={()=>{setList(Menulist)}}>All</li>
      </ul>
    </div>
    <div className='row'>
<Card list={list}/>
    </div>
    </>
  )
}

export default Menu
