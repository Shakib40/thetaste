import React from 'react'
import {MongoClient} from 'mongodb'
import DeliveredList from '../../components/delivered/deliveredList'

const DeliveredPage = (props) => {
  return (
    <>
    {/* <h1>Delivered</h1> */}
    <DeliveredList delivered={props.delivered} />
    </>
  )
}

export async function getStaticProps() {
  const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
  );
    
  const db = client.db()
  const deliveredCollection =  db.collection('delivered')
  const  Data = await deliveredCollection.find().sort({updatedAt:-1}).toArray()

  client.close()
  
  return {
     props: {
      delivered: Data.map( data =>({
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

export default DeliveredPage;
