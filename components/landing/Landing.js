import React from 'react'
import  Head from 'next/head'
import {Fragment} from 'react'

export const Landing = (props) => {
  // console.log("Landing" , props);

  const  [selected , setSelected] = React.useState(null)

  const ListSelector = (props) => {
    const { id , name, description , orderby } = props
    setSelected(id)
  }

  let Data = [
    { 
      id: '11',
      name: 'Home',
      description: 'Home',
    },
    { 
      id: '1',
      name: 'Search',
      description: 'Search',
    },

    {
      id: '2',
      name: 'Filter',
      description: 'Filter',
    },

    {
      id: '3',
      name: 'Bar Chart',
      description: 'Bar Chart',
      orderby: [
         {
          id: '31',
          name: 'Weeks',
          description: 'weeks',
         },

         {
          id: '32',
          name: 'Months',
          description: 'Months',
         },

         {
          id: '33',
          name: 'Years',
          description: 'Years',
         },
      ]
    },

    {
      id: '4',
      name: 'Line Chart',
      description: 'Line Chart',
      orderby: [
        {
         id: '41',
         name: 'Weeks',
         description: 'weeks',
        },

        {
         id: '42',
         name: 'Months',
         description: 'Months',
        },

        {
         id: '44',
         name: 'Years',
         description: 'Years',
        },
     ]
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
    <Fragment>
      <Head>
        <title>TheTaste</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>

      <div style={LandingStyle}>
        
      <div style = { LeftStyle }>
        { Data.map( (item , i) => (
          <div key={i} style = { LeftList } onClick={ () => ListSelector(item) }>
            { item.name }
              {/* { item.orderby &&  selected == item.id && 
                (
                  item.orderby.map( ( list, i) => (
                    <div key = {i} style = {ListAccordion} onClick={ () => ListSelector(list) } > {list.name} </div> 
                  ))
                )
              }   */}
          </div>
          
          ))}  
      </div>

      <div style = { RightStyle }>
         <Existed/>
      </div>

      </div>
    </Fragment>
  )
}

const LandingStyle = {
    display: 'flex',
    width: '98%',
    margin: '0px auto',
    marginTop: '15px',
    justifyContent: 'space-between'
}

const LeftStyle = {
  flex: 0.25,
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
  padding: '10px',
}

const LeftList = {
  border: '1px solid black',
  padding: '10px',
  margin: '0px 0px 10px 0px',
  letterSpacing: '1px',
  fontSize: '18px',
  cursor: 'pointer',
  borderRadius: '5px',
}

const ListAccordion = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px 0px',
  letterSpacing: '1px',
  fontSize: '18px',
  cursor: 'pointer',
}

const RightStyle = {
  flex: 0.74,
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
}