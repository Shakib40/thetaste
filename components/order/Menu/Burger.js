import Product from "../Product";
const Burger = (props) => {
   const { products , onAdd } = props
    return (
      <> 
      <div style = {MenuStyle }>
       { products.map(product =>(
          <div key = {product.id}>
          { product.category === 'burger' ? (
            <Product key = {product.id} product = {product} onAdd = {onAdd} ></Product>
          ) : null }
          </div>
        ))}
       </div>
       </>
    )
}
export default Burger

const MenuStyle = {
  padding: '10px'
}