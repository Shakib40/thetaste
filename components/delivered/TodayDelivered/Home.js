import React from 'react'
import { DeliveredItem } from './deliveredItem';

export const Home = (props) => {

console.log("TodayDeliveredPrice" ,props.TodayDeliveredPrice);
 return (
    <div> 
       <div style = {TodayOrder}>
           <div><span>Today Delivered Price:</span> <span>{props.TodayDeliveredPrice}</span> </div>
           <div><span>Today Delivered Cash Price:</span> <span> {props.TodayDeliveredCashPrice} </span> </div>
           <div><span>Today Delivered Online Price:</span> <span> {props.TodayDeliveredOnlinePrice} </span> </div>
       </div>

        {props.delivered.map((order) => (
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
  </div>
  )
}


const TodayOrder = {
    marginBottom : '10px',
    display : 'flex',
    flexDirection : 'column',
    padding : '15px 20px',
    letterSpacing : '3px',
    fontSize : '20px',
    backgroundColor: 'rgb(16, 185, 129)',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
}

