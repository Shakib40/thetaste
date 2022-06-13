import React from 'react'

export const DeliveredItem = (props) => {
  // console.log("Props" , props);

  return (
    <div style = {DeliveredItemStyle}>
    {props.cartItems.map( (item, i) =>(
      <div key ={i} style = {DeliveredItemStyle1}>
      <h1>
          <span>Name : {item.name} </span>
          <span>Price : {item.price} </span>
          <span>Quantity : {item.quantity} </span>
        </h1> 
      </div>
    ))}
    <div> Total Price : {props.totalPrice} </div>
  </div>
  )
}

const DeliveredItemStyle = {
  padding: '10px 10px 10px 10px',
  borderRadius: '5px',
  border: '1px solid black',
  margin : '10px 10px 10px 10px',
}

const DeliveredItemStyle1 = {
  margin: '10px 0px',
 padding : '0px 10px',
 borderRadius: '5px',
}
