const Header = (props) => {
    
    const {countCartItems}  = props;

    return(
        <section className = 'row container center'>
         <div>
            <h1>Menu</h1>
         </div>

         <div>
            <h2> 
                Cart{' '}
                { countCartItems ? 
                    (<button className ='badge'>{countCartItems}</button> )  
                    :('')
                } 
            </h2> {' '}
         </div>

        </section>
    )
}
export default Header

