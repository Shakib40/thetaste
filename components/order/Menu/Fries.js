import Product from "../Product";
const Fries = (props) => {
   const { products , onAdd } = props
    return (
      <> 
      <div style = {MenuStyle }>
       { products.map(product =>(
          <div key = {product.id}>
          { product.category === 'fries' ? (
            <Product key = {product.id} product = {product} onAdd = {onAdd} ></Product>
          ) : null }
          </div>
        ))}
       </div>
       </>
    )
}
export default Fries

const MenuStyle = {
  padding: '10px'
}