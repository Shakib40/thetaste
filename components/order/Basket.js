import './Order.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Basket = (props) => {
    
    const {cartItems , onAdd , onRemove , OrderNow}  = props;

    const itemsPrice = cartItems.reduce((acc, item) =>
      acc +  item.price * item.quantity , 0
    );
    

    return(

       <aside style={ChartStyle} >
         
         <div style={ChartHeading} >
            <span>Chart items </span>
         </div>

         <div>
            {cartItems.length === 0 && <div style={ChartHeading1}>Cart is empty</div> }
         </div>

         { cartItems.length > 0 &&
         <div style={ChartItem} >
            {cartItems.map( (item) =>(
              <div key ={item.id} className='row cartItem'>
                  
                  <div className='col-2'> {item.name}</div>
                  <div className='col-2'>
                      <button onClick={() => onAdd(item)} className='add'>+</button>
                      <button onClick={() => onRemove(item)} className='remove'>-</button>
                  </div>
                  <div className='col-2'>
                  {item.type}
                  </div>
                  <div className='col-2 text-right'>
                      {item.quantity} * Rs:{item.price}
                  </div>
              </div>
            ))}
         </div>
         }

         { cartItems.length > 0 &&
         <div style={ChartPrice} >
            {cartItems.length !== 0 && (
                <div className='row'>
                  <div className='col-2'><strong>Total Price</strong> </div>
                  <div className='col-1 text-right'> <strong>Rs:{itemsPrice}</strong> </div>
                </div>                 
            )}
         </div>
          }

         <button onClick={() => OrderNow(itemsPrice) } style ={OrderButton}> Confirm Order </button>
       </aside>
    )
}
export default Basket

const ChartStyle = {
  flex:'1',
  width: '99%',
  margin: '0 auto',
  margin: '5px',
  padding: '1rem',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' // 32
}

const ChartHeading = {
  border: '1px solid black',
  padding: '1rem 10px',
  fontSize: '20px',
  letterSpacing: '2px',
  borderRadius: '5px',
  marginBottom : '10px',
}

const ChartHeading1 = {
  border: '1px solid black',
  padding: '1rem 10px',
  fontSize: '20px',
  letterSpacing: '2px',
  borderRadius: '5px',
  marginBottom: '10px',
}

const ChartItem = {
  border: '1px solid black',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
  // fontSize: '16px !important',
}

const ChartPrice = {
  border: '1px solid black',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
}

const OrderButton = {
  marginTop: '5px',
  letterSpacing: '2px',
  padding: '15px 50px',
  borderRadius: '3px',
  cursor: 'pointer',
  fontSize: '16px',
  border:'none',
  // border: '2px solid #41addd',
  backgroundColor: '#41addd',
  color: 'white',
}