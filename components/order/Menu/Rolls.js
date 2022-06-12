import Product from "../Product";
const Rolls = (props) => {
   const { products , onAdd } = props
    return (
      <> 
      <div style = {MenuStyle }>
       { products.map(product =>(
          <div key = {product.id}>
          { product.category === 'roll' ? (
            <Product key = {product.id} product = {product} onAdd = {onAdd} ></Product>
          ) : null }
          </div>
        ))}
       </div>
       </>
    )
}
export default Rolls

const MenuStyle = {
  padding: '10px'
}