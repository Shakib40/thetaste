import {DeliveredItem} from './deliveredItem'

const DeliveredList = (props) => {
    return (
        <div style = {DeliveredStyle}>
        {props.delivered.map((order) => (
          <DeliveredItem
            key={order.id}
            id={order.id}
            cartItems={order.cartItems}
            totalPrice= {order.totalPrice}
            updatedAt= {order.updatedAt}
          />
        ))}
         
      </div>
    )
}

export default DeliveredList

const  DeliveredStyle = {
  border: '1px solid black',
  width: '98%',
  margin: '0 auto',
  marginTop: '15px',
  borderRadius: '5px',
}