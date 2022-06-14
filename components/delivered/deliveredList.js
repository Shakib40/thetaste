import React from 'react'
import { Home } from './TodayDelivered/Home'

const DeliveredList = (props) => {
    
  const  [selected , setSelected] = React.useState(null)

    const ListSelector = (props) => {
      const { id , name, description , orderby } = props
      setSelected(id)
    }

    let Data = [
      { 
        id: '11',
        name: 'Today Delivered',
        description: <Home delivered = {props.delivered} />
      },

      { 
        id: '12',
        name: 'Today Payment',
        description: 'Payment',
      },

      { 
        id: '1',
        name: 'Search',
        description: 'Search',
      },

      {
        id: '2',
        name: 'Statics',
        description: 'Statics',
      },
    ]
    
    const Existed = () => {
      const exist = Data.find(item => item.id == selected)
      return(
        <>
        { exist ? (
            exist.description 
        ) : (
          Data[0].description 
        )}
        </>
      )

    }
    
   
    return (
        <div style={{display: 'flex',justifyContent: 'space-between',width: '99%', margin: '0 auto', padding: '10px',}}>

          <div style={{
            flex: 0.24,
            // boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
            // padding: '10px',
            }}>
              { Data.map( (item , i) => (
              <div key={i} style = { LeftList } onClick={ () => ListSelector(item) }>
                { item.name }
              </div>
              
              ))} 
          </div>

          <div style = {{
            flex: 0.75,
            // boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
            // padding: '10px',
          }}>
            <Existed/>
          </div>

        </div>
    )
}

export default DeliveredList

const  DeliveredStyle = {
  flex: 0.75,
  border: '1px solid black',
  width: '98%',
  margin: '0 auto',
  borderRadius: '5px',
}

const LeftStyle = {
  flex: 0.25,
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
  padding: '10px',
}

const LeftList = {
  // border: '1px solid black',
  padding: '10px',
  margin: '0px 0px 10px 0px',
  letterSpacing: '1px',
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: 'rgb(16, 185, 129)',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
}
