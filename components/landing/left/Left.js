import React from 'react'

export const Left = () => {

  const  [selected , setSelected] = React.useState(null)

  const Accordion = (id) => {
    console.log("ID" , id);
    setSelected(id)
  }

  let Data = [
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
          id: '31',
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
         id: '31',
         name: 'Years',
         description: 'Years',
        },
     ]
    },
  ]

  return (
    <div style = { LeftStyle }>
        { Data.map( (item , i) => (
          <div key={i} style = { LeftList } onClick={ () => Accordion(item.id) }>
            { item.name }
              { item.orderby &&  selected == item.id && 
                (
                  item.orderby.map( ( list, i) => (
                    <div key = {i} style = {ListAccordion} > {list.name} </div> 
                  ))
                )
              }  
          </div>
          
        ))}  
    </div>
  )
}

const LeftStyle = {
  flex: 0.25,
  // boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', // 32
}

const LeftList = {
  border: '1px solid black',
  padding: '10px',
  margin: '0px 0px 10px 0px',
  letterSpacing: '1px',
  fontSize: '18px',
  cursor: 'pointer',
}

const ListAccordion = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px 0px',
  letterSpacing: '1px',
  fontSize: '18px',
  cursor: 'pointer',
}