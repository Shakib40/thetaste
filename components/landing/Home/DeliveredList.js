//Page / Delivered / index
import React from 'react'
import {DeliveredItem} from './DeliveredItem'
export const Home = (props) => {
  
  return (
    <>
    { props.delivered.map( ( delivered , index ) =>(
       <div key = {index}>
          <DeliveredItem
            cartItems = {delivered.cartItems}
            totalPrice = {delivered.totalPrice}
            id= {delivered.id}
            createdAt={delivered.createdAt}
            updatedAt={delivered.updatedAt}
          />
       </div>
    )) 
    
    }
    </>
  )
}
