import React from 'react'
import {DeliveredItem} from './DeliveredItem'
export const Home = (props) => {
  
  // const [ mapped , setmapped] = React.useState({});

  // React.useEffect( () => {
  //   const dataMap = props.delivered.reduce((acc, curr) => {
  //     const prodArr = acc[curr.cartItems.name];
  //     return { ...acc, [curr.cartItems.name]: prodArr ? [...prodArr, curr] : [curr] };
  //   }, {});
  //   setmapped(dataMap)
  // } , [props])
 
  // console.log("mapped" , mapped);
  
  

  return (
    <>
    { props.delivered.map( ( delivered , index ) =>(
       <div key = {index}>
          <DeliveredItem
            cartItems = {delivered.cartItems}
            totalPrice = {delivered.totalPrice}
            id= {delivered.id}
            createdAt={delivered.createdAt}
            updatedAt={delivered.updatedAt}
          />
       </div>
    )) 
    
    }
    </>
  )
}
