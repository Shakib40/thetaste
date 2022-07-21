// import React from 'react'
// import {MongoClient, ObjectId} from 'mongodb'
// import UpdateOrder from '../../components/update/UpdateOrder'

// const index = (props) => {
//   return (
//     <>
//     <UpdateOrder
//       id = {props.detailData.id}
//       cartItem = {props.detailData.cartItems}
//     />
//     </>
//   )
// }

// export async function getStaticPaths() {

//     //First mistake was didn't put await
//     const client =await MongoClient.connect(
//         'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
//     );
       
//     const db = client.db()
//     const ordersCollection =  db.collection('orders')
   
//     const orders = await ordersCollection.find({},{_id: 1}).toArray();
 
//     client.close();
//     // id is name  of folder name
//     return {
//        fallback: 'blocking',
//        paths: orders.map(meetup => ({
//           params: {
//              id: meetup._id.toString()
//           }
//        }))
//     }
//  }
 
//  export async function getStaticProps(context) {
    
//     const detailId = context.params.id

//     const client =await MongoClient.connect(
//         'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
//     );
       
//     const db = client.db()
//     const ordersCollection =  db.collection('orders')
   
//     const selectID = await ordersCollection.findOne({
//         _id: ObjectId(detailId) 
//     });
//     client.close();

//     return {
//        props: {
//           detailData:{
//              id: selectID._id.toString(),
//              cartItems:selectID.cartItems,
//              totalPrice:selectID.totalPrice,
//              createdAt:selectID.createdAt,
//              updatedAt:selectID.updatedAt,
//           }
//        }
//     }
// }

// export default index
