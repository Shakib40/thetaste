const Header = (props) => {
    const {countCartItems}  = props;

    return(
        <div className = 'row container center' style = {HeaderStye}>
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
        </div>
    )
}
export default Header

const HeaderStye = {
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
    marginBottom : '10px',
}

