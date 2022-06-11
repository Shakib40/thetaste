import React from 'react'
import  Head from 'next/head'
import {Fragment} from 'react'
import {Left} from './left/Left'
import {Right} from './right/Right'

export const Landing = (props) => {
  // console.log("Landing" , props);

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

  const ListSelector = () => {
     
  }

  return (
    <Fragment>
      <Head>
        <title>TheTaste</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>

      <div style={LandingStyle}>
        
        <Left ListSelector = {ListSelector}  Data ={Data} />
        <Right ListSelector = {ListSelector}  Data = {Data} />

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