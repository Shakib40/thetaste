import { useEffect , useState } from 'react'
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header'
import Main from './Main'
import Basket from './Basket'
import data from '../../data/Data'

const  NewOrderForm = (props) => {

    const {products}  = data;
    const [cartItems , setCartItems] = useState([]);

    const notify = (success) => {
        switch(success) {
            case 'success':
                toast.success('🦄 Wow so easy!', {
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
            default:
              
          }
    }

    const onAdd = (payload) => {
        const {id ,  name , price , type , category} = payload;

        const exist = cartItems.find(item => item.id === id)

        if(exist) {
            setCartItems(cartItems.map(x => 
             x.id === payload.id ? { 
                 ...exist , 
                 quantity: exist.quantity +1
             } : x ))
        }
        else{
            setCartItems([
                ...cartItems,
                {
                    ...payload, quantity:1
                }
            ])
        }
    }

    const onRemove = (payload) => {
      const {id ,  name , price , type , category} = payload;
      const exist = cartItems.find(item => item.id === id)

       if(exist.quantity ===1){
           setCartItems(cartItems.filter( (x) => x.id !== id));
       }else{
        setCartItems(cartItems.map(x => 
            x.id === payload.id ? { 
                ...exist , 
                quantity: exist.quantity-1
            } : x ))
       }
    }

    function OrderNow( totalPrice) {
        const payload = {
            cartItems: cartItems,
            totalPrice: totalPrice,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        if( payload.cartItems.length ==0 ){
            notify('error')
            stop()
        }else{
            props.onAddOrder(payload)
            notify('success')
        }
    }

    return (
        <section>
        <Header countCartItems = {cartItems.length} ></Header>
        <div className='row'>
            <Main onAdd = {onAdd} products={products}></Main>
            <Basket 
                onAdd = {onAdd}
                cartItems={cartItems}
                onRemove = {onRemove}
                OrderNow = {OrderNow}
            ></Basket>
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
    )
}

export default NewOrderForm;