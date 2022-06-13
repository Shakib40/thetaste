import {React , useState , useEffect } from 'react'
import {useRouter} from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Processing = (props) => {
    const { id , cartItems , totalPrice , createdAt , updatedAt , name , phone , remarks } = props.data;
    // console.log("Processing" , props);
    const router = useRouter();

    const [OptionMode, setOptionMode] = useState('');
    const [ Remarks , setRemarks ] = useState('')

    const [ timestamp, setTimeStamp ] = useState(null)
    useEffect( () => { 
      const time = new Date(updatedAt).toLocaleTimeString() 
      setTimeStamp(time)
    } , [props])

    const notify = (success) => {
    switch(success) {
        case 'success':
            toast.success('🦄 Completing Your Order!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style:{
                    backgroundColor:'black',
                    color:'white',
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
                    color:'white',
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
                    color:'white',
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
                    color:'white',
                }
                });
                break;
        default: 
        }
    }
    
    const  completeOrderHandler = async (ids) => {

        if( OptionMode !== '') {
            notify('success')
            const response = await fetch(`/api/orders/id`, {
                    method: 'DELETE',
                    body: ids
                })
                const datas = await response.json();
                const {data , id , message} = datas
                SuccessfullyDelivery( data )

        }else {
            notify('warn')
        } 

    }

    const SuccessfullyDelivery = async (payload) => {
        const { cartItems , totalPrice , createdAt , updatedAt } = payload
        const payloads = {
            cartItems : cartItems,
            totalPrice : totalPrice,
            createdAt : createdAt,
            updatedAt : new Date(),
            paymentMode : OptionMode,
            remarks : Remarks
        }
        const response = await fetch('/api/delivered', {
        method: 'POST',
        body: JSON.stringify(payloads),
        headers: {
            "Content-Type": "application/json"
        }
        })  
        const data = await response.json();
        router.push('/delivered')
    }


  return (
    <div style = {ProcessingStyle}>

        <div style={TodayOrderInfo}>
            <div style = {{display: 'flex',}} >

              <div style = {{ marginRight: '20px' }} >
                  { name ? (
                  <strong> { name } </strong>
                  ) : ( <strong> Name Not Provided </strong> ) }
              </div>

              <div>
              {phone ? (
                    <strong> {phone } </strong>
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
            {cartItems && cartItems.map( (item, i) =>(
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
        
        { remarks && (
        <div style = {YourMsg}>
           <strong>Your Remarked:</strong>
           <strong> {remarks} </strong>
        </div> )}

        <div style = {OrderMode} > 

            <div style = { { marginBottom: '15px', display: 'flex', } }>
            <span style = {{marginRight: '10px', width: '20%',} } > Payment Mode: </span>
            <select style = {InputSelect} onChange={(e) => setOptionMode(e.target.value)} defaultValue={'Select Payment Option Mode'}> 
                <option  disabled >Select Payment Option Mode</option>                   
                <option  value = 'cash' >Cash</option>
                <option  value = 'online' >Online</option>
                <option  value = 'due' >Due</option>
            </select>
            </div>

            <div style={{ display: 'flex', } }>
              <span style = {{marginRight: '10px', width: '20%',} }> Remarks: </span>
              <textarea style = {InputRemark} type="text" name="remarks" placeholder="Remarks" 
                value={Remarks}
                onChange={(e) => setRemarks(e.target.value)}
               />
            </div>
        </div>

        <div style = {OrderPrice}>
            <div> <strong style = {{ marginRight: '10px'}} >Total Price:-</strong> </div>
            <div> <strong>Rs.{totalPrice} </strong> </div>
        </div>

        <div style = {{ margin: '5px 0px', }}>
          <button className="succes" onClick={ () => completeOrderHandler(props.data.id)} style ={ButtonStyled}>Process Order</button>
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
  )
}

const ProcessingStyle = {
    marginBottom : '10px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', // 85
    display : 'flex',
    flexDirection : 'column',
    padding : '15px 20px',
    letterSpacing : '2px',
    borderRadius: '5px',
    width: '74%',
    margin: '10px'
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

  const YourMsg = {
    display: 'flex',
    width: '100%',
    fontSize: '18px',
    border: ' 1px solid black',
    padding: '10px 10px',
    marginBottom: '10px',
    borderRadius: '5px',
  }

  const OrderMode = {
    display: 'flex',
    // justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'column',
    fontSize: '20px',
    border: ' 1px solid black',
    padding: '10px 10px',
    marginBottom: '5px',
    borderRadius: '5px',
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

  const InputRemark = {
    // width: '100%',
    height: '80px',
    padding: '12px 20px',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    fontSize: '16px',
    // resize: 'none',
  }

  const OrderPrice = {
    display: 'flex',
    fontSize: '20px',
    border: ' 1px solid black',
    padding: '10px 10px',
    margin: '10px 0px',
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