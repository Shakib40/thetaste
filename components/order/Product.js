import React from 'react'
import './Product.module.css'

const Product = (props) => {
    const { product , onAdd }  = props;

    let halfPayload = {
      id: product.halfid,
      name: product.name,
      price: product.halfPrice,
      type: 'half',
      category: product.category,
    }

    let fullPayload = {
      id: product.fullid,
      name: product.name,
      price: product.fullPrice,
      type: 'full',
      category: product.category,
    }

  return (
    <>
    <div style = {ProductStyle}>     
        <div className="productwrap1">{product.name}</div>
        <div className="productwrap2"><button className="addBtn"onClick={ () => onAdd(halfPayload)}>Rs.{product.halfPrice}</button></div>
        <div className="productwrap2"><button className="addBtn"onClick={ () => onAdd(fullPayload)}>Rs.{product.fullPrice}</button></div>
    </div>
     </>
  )
}

export default Product

const ProductStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  fontSize: '16px',
  border: '1px solid black',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '5px',
}



