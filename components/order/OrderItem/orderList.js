import OrderItem from './OrderItem'

import React, { useMemo, useState, useEffect } from "react";
const  OrderList = (props) => {
    return (
    <section style = {OrderListStyle}> 
      {props.orders.length > 0 &&
        <div>
          {props.orders.map((order) => (
            <OrderItem
              key={order.id}
              id={order.id}
              cartItems={order.cartItems}
              totalPrice= {order.totalPrice}
              name = {order.name}
              phone = {order.phone}
              remarks = {order.remarks}
              updatedAt= {order.updatedAt}
            />
          ))}  
        </div>
      }
      {props.orders.length == 0 && <div> There is no Order Today go for hunt! </div> }
    </section>
    )
}

export default OrderList;

const OrderListStyle = {
  marginTop: '10px',
}

