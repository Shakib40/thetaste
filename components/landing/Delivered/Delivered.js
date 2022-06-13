import React from 'react'
import {Item} from './Item'
export const Delivered = (props) => {
  // console.log(props.delivered);
  
  // var today = moment().startOf('day');
  // "2018-12-05T00:00:00.00
  // var tomorrow = moment(today).endOf('day');
  // ("2018-12-05T23:59:59.999
  
  const day = new Date();

  // const item =  props.delivered.filter( (data) => {
  //     return ( data.totalPrice > 200 && data.totalPrice <= 300)
  // })


  //  work
  // const item =  props.delivered.filter( (data) => {
  //   return new Date(data.createdAt).getTime() > new Date(toTime)
  // })
  
  // var fromTime = new Date().getTime();
  // var toTime = new Date("2022-05-12").getTime();
  
  const fromTime = new Date(2022, 5, 14, 0, 5, 5, 5)
  const toTime = new Date(2022, 5, 14, 23, 58, 58, 5)

   const item =  props.delivered.filter( (data) => {
      return new Date(data.createdAt).getTime() >= new Date(fromTime).getTime() &&  
            new Date(data.createdAt).getTime() <= new Date(toTime).getTime();
    })

  console.log("Data" , item);
  
  return (
      <>
       { item.map( (order , i ) => (
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
