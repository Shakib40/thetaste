import React from 'react'
import { DeliveredItem } from './deliveredItem';

export const Home = (delivered) => {
 return (
    <>
        {delivered.delivered.map((order) => (
        <DeliveredItem
            key={order.id}
            id={order.id}
            cartItems={order.cartItems}
            totalPrice= {order.totalPrice}
            name={order.name}
            phone={order.phone}
            remarks = {order.remarks}
            comments = {order.comments}
            paymentMode = {order.paymentMode}
            updatedAt= {order.updatedAt}/>
        ))}
  </>
  )
}

