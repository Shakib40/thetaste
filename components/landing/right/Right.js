import React from 'react'

export const Right = (props) => {
  const {ListSelector , Data }  = props;
  
  console.log("Right" , Data);

  return( 
      <div style = { RightStyle }>
        <h1>Right</h1>
      </div>
    )
}

const RightStyle = {
  flex: 0.74,
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
}
