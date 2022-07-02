import React from 'react'
import styles from'./landingPage.module.scss';
import Sidebar from './Sidebar/Sidebar.jsx'
import Widget from './Widget/Widget.jsx';
import LineChart from './linechart/LineChart.jsx';
import BarChart from './barchart/BarChart.jsx';
import Table from '../Table/Table.js'

const LandingPage = (props) => {
  
  const headerFieldsList = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Contact",
      accessor: "phone",
    },
    {
      Header: "Payment Method",
      accessor: "paymode",
    },
    {
      Header: "Total Amount",
      accessor: "totalamount",
    },
  ];

  const columns = React.useMemo(() => headerFieldsList);

  const response = [
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },
    {
      name: 'Total Amount',
      totalamount: 28,
    },

  ]
  
  const data = React.useMemo(() => response)

  return (
    <div className={styles.landingPage}>
      <Sidebar/>
      <div className = {styles.landingContainer}>
         
         <div className = {styles.widgets}>
            <Widget/>
            <Widget/>
            <Widget/>
            <Widget/>
         </div>

         <div className = {styles.charts}>
            <BarChart/>
            <LineChart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
         </div>

         <div className = {styles.table}>
            <div className = {styles.tableContainer}>
            {Array.isArray(response) ? (
                <Table columns={columns} data={response} />
              ) : (
                <p>No Records</p>
              )}  
            </div> 
         </div>

      </div> 
    </div>  
  )
}

export default LandingPage