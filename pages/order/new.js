//our-domain/new-details
import { useRouter } from "next/router";
import {Fragment} from 'react'
import  Head from 'next/head'
import NewOrderForm from '../../components/order/NewOrderForm';

function NewOrder() {
  const router = useRouter()
  async function addNewDetailHandler(enteredDetailData){
    
      const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify(enteredDetailData),
        headers: {
          "Content-Type": "application/json"
        }
      })  
      const data = await response.json();
      router.push('/order')
}
  return(
    <Fragment>
      <Head>
        <title>Add New Detail</title>
        <meta 
          name="description" 
          content="Add your own meetup"
        />
      </Head>
      <NewOrderForm onAddOrder = {addNewDetailHandler} />
    </Fragment>
  )  
}

export default NewOrder;