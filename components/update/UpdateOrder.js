import { useEffect , useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import Header from './Header'
import Main from './Main'
import Basket from './Basket'
import data from '../../data/Data'

const  UpdateOrder = (props) => {
   const router = useRouter()
   const { cartItem , id } = props
   
    const {products}  = data;
    const [cartItems , setCartItems] = useState([]);
    useEffect( () => { setCartItems(cartItem) } ,[id]) 
     
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
                  toast.error('🦄 Hold a  Seconds!', {
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

    async function DeleteOrder(){
        let text = "Press a button!\nEither OK or Cancel.";    
        notify('warn')
        if (confirm(text) == true) {
        const response = await fetch('/api/delete', {
            method: 'DELETE',
            body: id,
        })  
        const data = await response.json();
        router.push('/new-order')
        } 
    }
   
    async function UpdateNow ( totalPrice) {

        if( cartItems.length === 0 ){
            DeleteOrder()
        }else{
            const response = await fetch('/api/orders/id', {
                method: 'PATCH',
                body: JSON.stringify({
                    id: id,      
                    cartItems: cartItems,
                    totalPrice: totalPrice,
                    updatedAt: new Date(),
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              })  
              const data = await response.json();
              notify('success')
              router.push('/today-order')
        }

        
    }


    
//     if( cartItems.length === 0 ){
//         DeleteOrder()
//    }

    return (
        <section>
        <Header countCartItems = {cartItems.length} ></Header>
        <div className='row'>
            <Main onAdd = {onAdd} products={products}></Main>
            <Basket 
                onAdd = {onAdd}
                cartItems={cartItems}
                onRemove = {onRemove}
                UpdateNow = {UpdateNow}
                DeleteOrder = {DeleteOrder}
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
        </section>
    )
}

export default UpdateOrder;