import React from 'react'
import { DeliveredItem } from './deliveredItem';

export const Home = (props) => {

 return (
    <div> 
       <div style = {TodayOrder}>
           <div><span>Today Delivered Price:</span> <strong>{props.TodayDeliveredPrice}</strong> </div>
           <div><span>Today Delivered Cash Price:</span> <strong> {props.TodayDeliveredCashPrice} </strong> </div>
           <div><span>Today Delivered Online Price:</span> <strong> {props.TodayDeliveredOnlinePrice} </strong> </div>
           <div><span>Today Due Price:</span> <strong>{props.TodayDuePrice}</strong> </div>
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
    padding : '20px 20px',
    letterSpacing : '3px',
    fontSize : '20px',
    borderRadius: '5px',
    boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
}

