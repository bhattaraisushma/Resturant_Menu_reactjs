import React from 'react'
import './card.css';
const Card = ({list}) => {
  return(
    <>
     
  {list.map((curElem)=>
    

      <>
    
      <div className='card-container' key={curElem.id}>
          <div className='c-name'>{curElem.item}</div>
          <div  className='food'><img src={curElem.image}/></div>
          <div > Price:{curElem.price}</div>
        <button>Order</button>
      </div>
      </>
    )
    }
    </>
  )
  }



export default Card
