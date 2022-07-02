import React from 'react'
import {MongoClient, ObjectId} from 'mongodb'
import {Fragment} from 'react'
import  Head from 'next/head'
import { Processing } from '../../../components/order/Processing'

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Processing</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>
      <Processing data = {props.detailData} />
    </Fragment>
  )
}

export async function getStaticPaths() {

  //First mistake was didn't put await
  const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
  );
    
  const db = client.db()
  const orderCollection =  db.collection('orders')

  const meetups = await orderCollection.find({},{_id: 1}).toArray();

  client.close();

  return {
     fallback: 'blocking',
     paths: meetups.map(meetup => ({
        params: {
          id: meetup._id.toString()
        }
     }))
  }
}

export async function getStaticProps(context) {
  
  const processing = context.params.id

  //First mistake was didn't put await
  const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
  );
    
  const db = client.db()
  const orderCollection =  db.collection('orders')

  const selectID = await orderCollection.findOne({
      _id: ObjectId(processing) 
  });

  client.close();


  return {
     props: {
        detailData:{
           id: selectID._id.toString(),
           cartItems:selectID.cartItems,
           totalPrice: selectID.totalPrice,
           createdAt: selectID.createdAt,
           updatedAt: selectID.updatedAt,
           name: selectID.name,
           phone: selectID.phone,
           remarks: selectID.remarks,
        }
     }
  }
}

export default index
