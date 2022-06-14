import React from 'react'
import { DeliveredItem } from './deliveredItem';

export const Home = (delivered) => {

    // const fromTime = new Date(2022, 5, 14, 0, 5, 5, 5)
    // const toTime = new Date(2022, 5, 14, 23, 58, 58, 5)
  
    //  const item =  props.delivered.filter( (data) => {
    //     return new Date(data.createdAt).getTime() >= new Date(fromTime).getTime() &&  
    //           new Date(data.createdAt).getTime() <= new Date(toTime).getTime();
    //   })

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

