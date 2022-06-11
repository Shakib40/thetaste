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
                autoClose: 5000,
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
              autoClose: 5000,
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
                autoClose: 5000,
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
    notify('warn')
    if (confirm(text) == true) {
      const response = await fetch('/api/delete', {
        method: 'DELETE',
        body: link,
      })  
      const data = await response.json();
      router.push('/new-order')
    } 
  }


  return (
      <div style={TodayOrder}>

        <div style={TodayOrderInfo}>
            <div style = {{display: 'flex',}} >
               <div style = {{ marginRight: '20px' }} >Shakib Jilani</div>
               <div>9504361535</div>
            </div>
            <div>19:30</div>
        </div>
        
        <div> 
        <table style={Table}>
          <tbody>
            {props.cartItems.map( (item, i) =>(
                <tr rowSpan="4" key ={i}>
                  <td colSpan="4" style ={ { width: '50%',} } >{item.name} </td>
                  <td colSpan="3" style ={ { width: '16%',} }> { item.type.toUpperCase() }</td>
                  <td colSpan="3" style ={ { width: '16%',} }> {item.price} </td>
                  <td colSpan="3" style ={ { width: '16%',} }> {item.quantity} </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

        <div style = {OrderPrice}>
            <div> <strong style = {{ marginRight: '10px'}} >Total Price:-</strong> </div>
            <div> <strong>Rs.{props.totalPrice} </strong> </div>
        </div>

        <div style = {{ margin: '5px 0px', }}>
          <button className="succes" onClick={ () => completeOrderHandler(props.id)} style ={ButtonStyled}>Complete Order</button>
          <button onClick={() => updateOrderHandler(props.id)} style ={ButtonStyled} >Update Order</button>
          <button className="alert" onClick={ () => canelOrderHandler(props.id)} style ={ButtonStyled} >Cancel Order</button>
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
      </div>
  );
}

export default OrderItem;

const TodayOrder = {
  marginBottom : '10px',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', // 85
  display : 'flex',
  flexDirection : 'column',
  padding : '15px 20px',
  letterSpacing : '2px',
  borderRadius: '5px',
  width: '74%',
}

const TodayOrderInfo = {
  display: 'flex',
  justifyContent : 'space-between',
  marginBottom: '15px',
  border: '1px solid black',
  borderRadius: '5px',
  padding: '10px 10px',
}

const Table = {
  width: '100%',
  border: '1px solid black',
  padding: '10px 10px',
  marginBottom: '10px',
  borderRadius: '5px',
}

const OrderPrice = {
  display: 'flex',
  fontSize: '20px',
  border: ' 1px solid black',
  padding: '10px 10px',
  marginBottom: '5px',
  borderRadius: '5px',
  justifyContent: 'flex-end',
}

const ButtonStyled = {
    padding: '12px 50px',
    marginRight: '15px',
    letterSpacing: '2px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#41addd',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
 }

