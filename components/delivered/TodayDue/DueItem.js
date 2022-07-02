import React from 'react'
import {useRouter} from 'next/router'
export const DueItem = (props) => {

  const [ timestamp, setTimeStamp ] = React.useState(null)
  React.useEffect( () => { 
    const time = new Date(props.updatedAt).toLocaleTimeString() 
    setTimeStamp(time)
  } , [props])

  const router = useRouter();
  function completeDueHandler() {
    router.push('/delivered/due/'+ props.id )
  }

  return (
    <div style={TodayOrder} onClick={() => completeDueHandler()}>

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
    </div>
  )
}


const TodayOrder = {
  marginBottom : '10px',
  display : 'flex',
  flexDirection : 'column',
  padding : '15px 20px',
  letterSpacing : '2px',
  borderRadius: '5px',
  // backgroundColor: 'rgb(16, 185, 129)',
  boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
  cursor: 'pointer',
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

const ButtonStyled = {
    padding: '12px 50px',
    margin: '15px',
    letterSpacing: '2px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#41addd',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
 }
