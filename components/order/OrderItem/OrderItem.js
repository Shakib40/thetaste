// Today Order List
import {useRouter} from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderItem(props) {

  const router = useRouter();

  const notify = (success) => {
    switch(success) {
        case 'success':
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style:{
                    backgroundColor:'black',
                }
            });
          break;
        case 'error':
            toast.error('🦄Please Enter Order!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style:{
                    backgroundColor:'black',
                }
            });
          break;
          case 'alert':
            toast.warn('🦄 Updating in Progress!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              style:{
                backgroundColor:'black',
              }
              });
            break;
            case "warn" :
              toast.error('🦄 Hold a Seconds!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style:{
                  backgroundColor:'black',
                }
                });
              break;
        default: 
      }
  }
  
  // Done
  const completeOrderHandler = async (ids) => {
      const response = await fetch(`/api/orders/id`, {
        method: 'DELETE',
        body: ids
      })

      const datas = await response.json();
      const {data , id , message} = datas
      SuccessfullyDelivery( data )
  }
  
  // Done
  const SuccessfullyDelivery = async (payload) => {
    const response = await fetch('/api/delivered', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })  
    const data = await response.json();
    notify('success')
    router.push('/delivered')
  }
  

  const updateOrderHandler = (link) =>{
    
    let text = "Press a button!\nEither OK or Cancel.";
    
    if (confirm(text) == true) {
      notify('alert')
      router.push('/updateOrder/' + link )
    } 
    
  }

  const canelOrderHandler = async (link) =>{

    let text = "Press a button!\nEither OK or Cancel.";
    
    if (confirm(text) == true) {
      const response = await fetch('/api/delete', {
        method: 'DELETE',
        body: link,
      })  
      const data = await response.json();
      notify('warn')
      router.push('/new-order')
    } 
    
  }


  return (
      <section style={TodayOrder}>
        
        {props.cartItems.map( (item, i) =>(
          <section key ={i}>
          <h1>
              <span>Name : {item.name} </span>
              <span>Price : {item.price} </span>
              <span>Quantity : {item.quantity} </span>
            </h1>
             <div> <strong> Total Price :  {props.totalPrice} </strong> </div>
          </section>
        ))}
        <div>
          <button onClick={ () => completeOrderHandler(props.id)}>Complete Order</button>
          <button onClick={() => updateOrderHandler(props.id) }>Update Order</button>
          <button onClick={ () => canelOrderHandler(props.id)}>Cancel Order</button>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

      </section>
  );
}

export default OrderItem;

const TodayOrder = {
  border: '1px solid black',
  marginBottom : '10px',
}
