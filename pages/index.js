import {Landing} from '../components/landing/Landing'
import { MongoClient } from 'mongodb'
import  Head from 'next/head'
import {Fragment} from 'react'

function Home(props) {

  return  (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>
      <Landing delivered = {props.delivered} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
  );
    
  const db = client.db()
  const orderCollection =  db.collection('delivered')
  const  Data = await orderCollection.find().toArray()

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

export default Home;