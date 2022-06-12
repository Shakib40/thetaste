import Product from "./Product";
import React  from "react";

import Noodles  from "../order/Menu/Noodles"
import Rice from '../order/Menu/Rice'
import Burger  from '../order/Menu/Burger'
import Rolls from '../order/Menu/Rolls'
import Soup  from '../order/Menu/Soup'
import Veg from "../order/Menu/Veg";
import NonVeg from "../order/Menu/NonVeg";
import Fries from "../order/Menu/Fries";
import Paratha from "../order/Menu/Paratha";
import RiceCombo from "../order/Menu/RiceCombo";
import Biryani from "../order/Menu/Biryani";
import BurgerCombo from "../order/Menu/BurgerCombo";
import Momos from "../order/Menu/Momos";


const Main = (props) => {
    
    const {products , onAdd}  = props;

    // const Noodles = () => {
    //   return (
    //     <section className="Wrapper">
    //      { products.map(product =>(
    //         <section key = {product.id}>
    //         { product.category === 'noodles' ? (
    //           <Product key = {product.id} product = {product} onAdd = {onAdd} ></Product>
    //         ) : null }
    //         </section>
    //       ))}
    //      </section>
    //   )
    // }

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
        description : <Noodles products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Rice", 
        description : <Rice products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Burger", 
        description : <Burger products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Rolls", 
        description : <Rolls products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Soup", 
        description : <Soup products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Chiness Veg", 
        description : <Veg products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Chiness Non Veg", 
        description : <NonVeg products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Fries", 
        description : <Fries products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Paratha", 
        description : <Paratha products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Rice Combo", 
        description : <RiceCombo products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Biryani", 
        description : <Biryani products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Burger Combo", 
        description : <BurgerCombo products = {products} onAdd = {onAdd}/>
      },
      { 
        title: "Momo", 
        description : <Momos products = {products} onAdd = {onAdd}/>
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
  border: "1px solid black"
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