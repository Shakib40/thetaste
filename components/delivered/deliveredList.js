import React from 'react'
import { Home } from './TodayDelivered/Home'
import {Due} from './TodayDue/Due'

const DeliveredList = (props) => {

  const date = new Date().getDate()
  const month = new Date().getMonth()

  const fromTime = new Date(2022, month, date, 0, 0, 0, 5)
  const toTime = new Date(2022, month, date, 23, 59, 59, 5)
  
  //TodayDelivered
  const TodayDelivered =  props.delivered.filter( (data) => {
      return new Date(data.createdAt).getTime() >= new Date(fromTime).getTime() &&  
            new Date(data.createdAt).getTime() <= new Date(toTime).getTime();
  })
  const TodayDeliveredPrice = TodayDelivered.reduce((acc, item) =>acc +  item.totalPrice, 0);

  const TodayDeliveredCash =  TodayDelivered.filter( (data) => { return data.paymentMode === 'cash'})

  const TodayDeliveredCashPrice = TodayDeliveredCash.reduce((acc, item) => acc +  item.totalPrice, 0);

  const TodayDeliveredOnline =  TodayDelivered.filter( (data) => { return data.paymentMode === 'online'})
  
  const TodayDeliveredOnlinePrice = TodayDeliveredOnline.reduce((acc, item) => acc +  item.totalPrice, 0);

 
  //TodayDelivered Due
  const TodayDue =  TodayDelivered.filter( (data) => {
    return data.paymentMode === 'due'
  })

  const TodayDuePrice = TodayDue.reduce((acc, item) =>
      acc +  item.totalPrice, 0
  );

  const  [selected , setSelected] = React.useState(null)

    const ListSelector = (props) => {
      const { id , name, description , orderby } = props
      setSelected(id)
    }

    let Data = [
      { 
        id: '11',
        name: 'Today Delivered',
        description: <Home 
                    delivered = {TodayDelivered} 
                    TodayDeliveredPrice = {TodayDeliveredPrice} 
                    TodayDeliveredCashPrice ={TodayDeliveredCashPrice }
                    TodayDeliveredOnlinePrice = {TodayDeliveredOnlinePrice}
                    TodayDuePrice = {TodayDuePrice}
                    />
      },

      { 
        id: '12',
        name: 'Today Due',
        description: <Due delivered = {TodayDue} TodayDuePrice = {TodayDuePrice} />
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
            }}>
              { Data.map( (item , i) => (
              <div key={i} style = { LeftList } onClick={ () => ListSelector(item) }>
                { item.name }
              </div>
              
              ))} 
          </div>

          <div style = {{
            flex: 0.75,
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
  boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
  padding: '10px',
}

const LeftList = {
  padding: '10px',
  margin: '0px 0px 10px 0px',
  letterSpacing: '1px',
  fontSize: '18px',
  cursor: 'pointer',
  boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
}
