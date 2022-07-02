import React from 'react'
import {DueItem} from './DueItem'

export const Due = (props) => {
    return (
        <> 
           <div style = {TodayOrder}>
                <div><span>Today Due Price:</span> <strong>{props.TodayDuePrice}</strong> </div>
           </div>
            {props.delivered.map((order) => (
            <DueItem
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
    
const TodayOrder = {
    marginBottom : '10px',
    display : 'flex',
    flexDirection : 'column',
    padding : '15px 20px',
    letterSpacing : '3px',
    fontSize : '20px',
    boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
    borderRadius : '5px',
}
