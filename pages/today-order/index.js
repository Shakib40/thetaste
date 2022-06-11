import React from 'react'
import OrderList from '../../components/order/OrderItem/orderList'
import { MongoClient } from 'mongodb'

const index = (props) => {
  return (
    <>
    <OrderList orders={props.orders} />
    {/* <h1>TOday</h1> */}
    </>
  )
}

export async function getStaticProps() {
  const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
  );
    
  const db = client.db()
  const orderCollection =  db.collection('orders')
  const  Data = await orderCollection.find().toArray()

  client.close()
  
  return {
     props: {
       orders: Data.map( data =>({
          cartItems: data.cartItems,
          totalPrice: data.totalPrice,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          id: data._id.toString(),
       }))
     },
     revalidate: 1
  };
}

export default index
