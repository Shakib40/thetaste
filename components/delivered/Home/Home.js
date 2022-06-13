import React from 'react'
import { DeliveredItem } from './deliveredItem';

export const Home = (delivered) => {
 return (
    <div style = {DeliveredItemStyle}>
        {delivered.delivered.map((order) => (
        <DeliveredItem
            key={order.id}
            id={order.id}
            cartItems={order.cartItems}
            totalPrice= {order.totalPrice}
            updatedAt= {order.updatedAt}/>
        ))}
  </div>
  )
}

const DeliveredItemStyle = {
  padding: '10px 10px 10px 10px',
  borderRadius: '5px',
  border: '1px solid black',
  margin : '10px 10px 10px 10px',
}

// const DeliveredItemStyle1 = {
//   margin: '10px 0px',
//  padding : '0px 10px',
//  borderRadius: '5px',
// }
