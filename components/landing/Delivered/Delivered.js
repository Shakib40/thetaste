import React from 'react'
import {Item} from './Item'
export const Delivered = (props) => {
  // console.log(props.delivered);
  
  // var today = moment().startOf('day');
  // "2018-12-05T00:00:00.00
  // var tomorrow = moment(today).endOf('day');
  // ("2018-12-05T23:59:59.999
  
  const day = new Date();
  // console.log("Day" , day);

  const item =  props.delivered.filter( (data) => {
      //  return new Date( new Date().getTime() - ( 24 * 60 * 60 * 1000) )
      
  })

  console.log("Data" , item);
  
  return (
      <>
       { props.delivered.map( (order , i ) => (
        <Item key={order.id}
            id={order.id}
            cartItems={order.cartItems}
            totalPrice= {order.totalPrice}
            updatedAt= {order.updatedAt}
          />   
       ))}
      </>
  )
}
