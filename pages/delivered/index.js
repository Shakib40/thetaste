// Delivered Components which are in Navigation
import React from 'react'
import {MongoClient} from 'mongodb'
import DeliveredList from '../../components/delivered/deliveredList'

const DeliveredPage = (props) => {
  return (
    <>
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
          id: data._id.toString(),
          cartItems: data.cartItems,
          totalPrice: data.totalPrice,
          name: data.name,
          phone: data.phone,
          remarks: data.remarks,
          comments: data.comments,
          paymentMode: data.paymentMode,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
       }))
     },
     revalidate: 1
  };
}

export default DeliveredPage;
