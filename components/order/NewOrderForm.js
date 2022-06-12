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
    
    const [OptionMode, setOptionMode] = useState('');
    const [ Remarks , setRemarks ] = useState('')


    const notifyAdded = (msg) => {
        toast.success(`Added : ${msg} `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style:{
                backgroundColor:'black',
                color: 'white'
            }
        });
    } 

    const notifyRemove = (msg) => {
        toast.error(`Removed : ${msg} `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style:{
                backgroundColor:'black',
                color: 'white'
            }
        });
    } 

    const notify = (success) => {
        switch(success) {
            case 'success':
                toast.success('🦄 Processing Your Order!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style:{
                        backgroundColor:'black',
                        color: 'white'
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
                        color: 'white'
                    }
                });
              break;
            default:
              
        }
    }

    const onAdd = (payload) => {
        const {id ,  name , price , type , category} = payload;
        const exist = cartItems.find(item => item.id === id)
        
        notifyAdded(name + ' ' + type.toUpperCase() + ' Rs.' + price );

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
      notifyRemove(name + ' ' + type.toUpperCase() + ' Rs.' + price );
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

    function OrderNow( data ) {
        const { itemsPrice , name , phone , remarks } = data;
        const payload = {
            cartItems: cartItems,
            totalPrice: itemsPrice,
            name: name,
            phone: phone,
            remarks: remarks,
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