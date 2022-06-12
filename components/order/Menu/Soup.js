import Product from "../Product";
const Soup = (props) => {
   const { products , onAdd } = props
    return (
      <> 
      <div style = {MenuStyle }>
       { products.map(product =>(
          <div key = {product.id}>
          { product.category === 'soup' ? (
            <Product key = {product.id} product = {product} onAdd = {onAdd} ></Product>
          ) : null }
          </div>
        ))}
       </div>
       </>
    )
}
export default Soup

const MenuStyle = {
  padding: '10px'
}