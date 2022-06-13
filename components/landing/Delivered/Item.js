import {React , useState , useEffect }from 'react'

export const Item = ({updatedAt , totalPrice}) => {

  const [ timestamp, setTimeStamp ] = useState(null)

    useEffect( () => { 
      const time = new Date(updatedAt).toLocaleDateString() 
      setTimeStamp(time)
    } , [updatedAt])

  return (
    <div> {timestamp} ==  {totalPrice} </div>
  )
}
