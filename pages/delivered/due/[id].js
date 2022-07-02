// import Detail from '../../components/details/Detail'
import {MongoClient, ObjectId} from 'mongodb'
import {Due} from '../../../components/Due/Due'

import {Fragment} from 'react'
import  Head from 'next/head'

function DetailsView(props) {
   return(
      <Fragment>
        <Head>
          <title>{props.detailData.title}</title>
          <meta 
            name="description" 
            content={props.detailData.description}
          />
        </Head>
        <Due 
        id = {props.detailData.id}
        cartItems={props.detailData.cartItems}
        totalPrice= {props.detailData.totalPrice}
        name={props.detailData.name}
        phone= {props.detailData.phone}
        remarks= {props.detailData.remarks}
        comments= {props.detailData.comments}
        paymentMode= {props.detailData.paymentMode}
        createdAt= {props.detailData.createdAt}
        updatedAt= {props.detailData.updatedAt}
        />
      </Fragment>
   ) 
}

export async function getStaticPaths() {

   //First mistake was didn't put await
   const client =await MongoClient.connect(
      'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/meetups?retryWrites=true&w=majority'
   );
      
   const db = client.db()
   const meetupsCollection =  db.collection('meetups')
  
   const meetups = await meetupsCollection.find({},{_id: 1}).toArray();

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
   
   const detailId = context.params.id

   //First mistake was didn't put await
   const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
  );
      
  const db = client.db()
  const deliveredCollection =  db.collection('delivered')
  
   const selectID = await deliveredCollection.findOne({
       _id: ObjectId(detailId) 
   });

   client.close();

   return {
      props: {
         detailData:{
            id: selectID._id.toString(),
            cartItems: selectID.cartItems,
            totalPrice: selectID.totalPrice,
            name: selectID.name,
            phone: selectID.phone,
            remarks: selectID.remarks,
            comments: selectID.comments,
            paymentMode: selectID.paymentMode,
            createdAt: selectID.createdAt,
            updatedAt: selectID.updatedAt,
         }
      }
   }
}

export default  DetailsView;
