import React from 'react'
// import { OrderByDay } from '../../components/landing/ordered/orderByDay'
import { MongoClient } from 'mongodb'
import { deliveredCollection } from '../../collection/deliveredCollection'
const index = (props) => {
  return (
    <>
    {/* <OrderByDay delivered={props.delivered} /> */}
    </>
  )
}

export async function getStaticProps() {
    const client =await MongoClient.connect(
        'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
    );
        
      const db = client.db()
      const deliveredCollection =  db.collection('delivered')
  const  Data = await deliveredCollection.find().toArray()
  console.log("Data" , Data);

  client.close()
  
  return {
     props: {
       delivered: Data.map( data =>({
          cartItems: data.cartItems,
          totalPrice: data.totalPrice,
          name: data.name,
          phone: data.phone,
          remarks: data.remarks,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          id: data._id.toString(),
       }))
     },
     revalidate: 1
  };
}

export default index
