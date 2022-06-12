import Product from "../Product";
const Paratha = (props) => {
   const { products , onAdd } = props
    return (
      <> 
      <div style = {MenuStyle }>
       { products.map(product =>(
          <div key = {product.id}>
          { product.category === 'paratha' ? (
            <Product key = {product.id} product = {product} onAdd = {onAdd} ></Product>
          ) : null }
          </div>
        ))}
       </div>
       </>
    )
}
export default Paratha

const MenuStyle = {
  padding: '10px'
}