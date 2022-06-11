import OrderItem from './OrderItem'

import React, { useMemo, useState, useEffect } from "react";

const  OrderList = (props) => {
  //  console.log( "OrderList" , props );
    return (
    <section>
      {props.orders.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          cartItems={order.cartItems}
          totalPrice= {order.totalPrice}
          updatedAt= {order.updatedAt}
        />
      ))}
       
    </section>
    )
}

export default OrderList;

