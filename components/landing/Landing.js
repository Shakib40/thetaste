import React from 'react'
import  Head from 'next/head'
import {Fragment} from 'react'
import {Left} from './left/Left'
import {Right} from './right/Right'

export const Landing = (props) => {
  // console.log("Landing" , props);
  return (
    <Fragment>
      <Head>
        <title>TheTaste</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>

      <div style={LandingStyle}>
        
        <Left/>
        <Right/>
        
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