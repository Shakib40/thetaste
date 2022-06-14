//Page / Delivered / index
import React from 'react'
import {DeliveredItem} from './DeliveredItem'
export const Home = (props) => {
  
  return (
    <>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
          <div style ={{
            flex: .73,
          }}>
          { props.delivered.map( ( delivered , index ) =>(
          <div key = {index}>
              <DeliveredItem
                id= {delivered.id}
                cartItems = {delivered.cartItems}
                totalPrice = {delivered.totalPrice}
                name = {delivered.name}
                phone = {delivered.phone}
                remarks = {delivered.remarks}
                comments = {delivered.comments}
                paymentMode = {delivered.paymentMode}
                createdAt={delivered.createdAt}
                updatedAt={delivered.updatedAt}
              />
          </div>
        )) 
        }
        </div>

        <div style = {{
          flex: .26,
          border: "1px solid black"
        }} >

        </div>
    </div>
    </>
  )
}
