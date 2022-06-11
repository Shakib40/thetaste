import Product from "./Product";
import React  from "react";


const Main = (props) => {
    
    const {products , onAdd}  = props;

    const Noodles = () => {
      return (
        <section className="Wrapper">
         { products.map(product =>(
            <section key = {product.id}>
            { product.category === 'noodles' ? (
              <Product key = {product.id} product = {product} onAdd = {onAdd} ></Product>
            ) : null }
            </section>
          ))}
         </section>
      )
    }

    const [selected , setSelected] = React.useState(null)
    const toggle = (i) => {
        if( selected === i ) {
          return setSelected(null)
        }
        setSelected(i)
    }
    
    const data = [
      { 
        title: "Noodles", 
        description : <Noodles/>
      },
  
      { 
        title: "Rice", 
        description : "Rice"
      },
      { 
        title: "Burger", 
        description : "Burger"
      },
      { 
        title: "Rolls", 
        description : "Rolls"
      },
    ]

    return(
        <section className = 'container col-2 '>         
         
               {data.map( (item, i) => (
                  
                  <div style={cardWapper} key={i}>
                    <div style = {title} onClick={() => toggle(i)}>
                      <span> {item.title}</span>
                      <span style = {iconStyle} >
                        { selected === i ? '-' : '+' }
                      </span>
                    </div>
                  <div style = { selected === i ? show : description} > {item.description} </div>
                  </div>
                  ))
                }
        </section>
    )
}
export default Main

const cardWapper = {
  marginBottom: "15px",
  borderBottom: "0",
  borderRadius: "5px",
  letterSpacing: "2px",
  border: "1px solid red"
}

const title = {
  display : "flex",
  justifyContent :"space-between",
  alignItems : "center",
  cursor : "pointer",
  padding : "20px",
  letterSpacing : "2px",
  fontSize : "20px",
  fontWeight : "bold",
}

const iconStyle ={

}


const show ={
  height : 'auto',
  maxHeight : '9999px',
  display: 'block',
  transition : 'all 0.5s cubic-bezier(1,0,1,0)'
} 

const description = {
  color: 'yellow',
  display: 'none',
  overflow : 'hidden', 
  transition : 'all 0.5s cubic-bezier(0,1,0,1)'
}