import React from 'react'
import {useRouter} from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Due = (props) => {
  const {id , cartItems , comments , createdAt , name , phone , remarks , totalPrice , updatedAt } = props
  const router = useRouter();
  const [ timestamp, setTimeStamp ] = React.useState(null)
  React.useEffect( () => { 
    const time = new Date(props.updatedAt).toLocaleTimeString() 
    setTimeStamp(time)
  } , [props])

   
  const [OptionMode, setOptionMode] = React.useState('');

  const SuccessfullyDelivery = async () => {
    
    if(OptionMode !== ''){
      const response = await fetch('/api/delivered/id', {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,      
            cartItems: cartItems,
            paymentMode: OptionMode,
            totalPrice: totalPrice,
            updatedAt: updatedAt,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })  
      const data = await response.json();
      // notify('success')
      router.push('/')

  }else{
    alert('Please select')
  }
}

  return (
    <div style={TodayOrder}>

    <div style={TodayOrderInfo}>
          <div style = {{display: 'flex',}} >

             <div style = {{ marginRight: '20px' }} >
                 { props.name ? (
                  <strong> { props.name } </strong>
                 ) : ( <strong> Name Not Provided </strong> ) }
              </div>

             <div>
              {props.phone ? (
                    <strong> { props.phone } </strong>
                  ) : ( <strong> +91XXXXXXXXXX </strong> ) }
            </div>
          </div>

          <div> 
              <strong> { timestamp } </strong>
          </div>
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
   
      { props.remarks && <div style={OrderRemark} > <strong style = {{ marginRight: '10px'}}>Remarks:</strong>{props.remarks}</div>}

      { props.comments && <div style={OrderRemark} > <strong style = {{ marginRight: '10px'}}>Comments:</strong>{props.comments}</div>}
      

      <div style = {OrderPrice}>
          <div> <strong style = {{ marginRight: '10px'}} >Total Price:-</strong> </div>
          <div> <strong>Rs.{props.totalPrice} </strong> </div>
          <div> <strong style = {{ marginLeft: '10px'}}>{ props.paymentMode.toUpperCase()} </strong> </div>
      </div>

      <div style = { { marginBottom: '15px', display: 'flex', } }>
        <span style = {{marginRight: '10px', width: '20%',} } > Payment Mode: </span>
        <select style = {InputSelect} onChange={(e) => setOptionMode(e.target.value)} defaultValue={'Select Payment Option Mode'}> 
            <option  disabled >Select Payment Option Mode</option>                   
            <option  value = 'cash' >Cash</option>
            <option  value = 'online' >Online</option>
        </select>
        </div>
        <button style={ButtonStyle} type="button" onClick= {() => SuccessfullyDelivery()}  >Complete Due</button>
  </div>
  )
}
const ButtonStyle = {
  padding: '15px 50px',
  letterSpacing : '1px',
  border: 'none',
  cursor: 'pointer',
}

const InputSelect = {
  padding: '10px',
  letterSpacing:  "2px",
  boxSizing: 'border-box',
  border: '2px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f8f8f8',
  fontSize: '16px',
}


const TodayOrder = {
  marginBottom : '10px',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', // 85
  display : 'flex',
  flexDirection : 'column',
  padding : '15px 20px',
  letterSpacing : '2px',
  backgroundColor: 'rgb(16, 185, 129)',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
  width: '50%',
  margin: '0 auto',
  marginTop: '20px',
}

const TodayOrderInfo = {
  display: 'flex',
  justifyContent : 'space-between',
  marginBottom : '10px',
  border: '1px solid black',
  // borderRadius: '5px',
  padding: '10px 10px',
}

const Table = {
  width: '100%',
  border: '1px solid black',
  padding: '10px 10px',
  marginBottom: '10px',
  // borderRadius: '5px',
}

const OrderRemark =  {
  display: 'flex',
  fontSize: '20px',
  border: ' 1px solid black',
  padding: '10px 10px',
  marginBottom : '10px',
  // borderRadius: '5px',
}

const OrderPrice = {
  display: 'flex',
  fontSize: '20px',
  border: ' 1px solid black',
  padding: '10px 10px',
  marginBottom : '10px',
  // borderRadius: '5px',
  justifyContent: 'flex-end',
}