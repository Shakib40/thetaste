// import OrderList from '../components/order/OrderItem/orderList'
// import { MongoClient } from 'mongodb'
import  Head from 'next/head'
import {Fragment} from 'react'

function Home() {

  return  (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>
      {/* <OrderList orders={props.orders} /> */}
      <h1>Home</h1>
    </Fragment>
  )
}

// export async function getStaticProps() {
//   const client =await MongoClient.connect(
//     'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
//   );
    
//   const db = client.db()
//   const orderCollection =  db.collection('orders')
//   const  Data = await orderCollection.find().toArray()

//   client.close()
  
//   return {
//      props: {
//        orders: Data.map( data =>({
//           cartItems: data.cartItems,
//           totalPrice: data.totalPrice,
//           createdAt: data.createdAt,
//           updatedAt: data.updatedAt,
//           id: data._id.toString(),
//        }))
//      },
//      revalidate: 1
//   };
// }

export default Home;