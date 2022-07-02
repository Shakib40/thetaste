import React from 'react';
import styles from './widget.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/io';
const Widget = () => {
//    let data;

//    switch (type) {
//     case 'users':
//      data = {
//         title: 'USERS',
//         isMoney: false,
//         link: 'See all users',
//         icon:(
//          <FaRegUserCircle className= {styles.icon}/>
//         )
//      };
//      break;

//      case 'users':
//      data = {
//         title: 'DELIVERED',
//         isMoney: false,
//         link: 'See all users',
//         icon:(
//          <FaRegUserCircle className= {styles.icon}/>
//         )
//      };
//      break;

//      case 'users':
//      data = {
//         title: 'ORDERS',
//         isMoney: false,
//         link: 'See all users',
//         icon:(
//          <FaRegUserCircle className= {styles.icon}/>
//         )
//      };
//      break;

//      case 'users':
//      data = {
//         title: 'USERS',
//         isMoney: false,
//         link: 'See all users',
//         icon:(
//          <FaRegUserCircle className= {styles.icon}/>
//         )
//      };
//      break;
//      default: break;

//    }
    return (
    <div className={styles.widget}>
        <div className={styles.left}>
            <span className={styles.title}>USERS</span>
            <span className={styles.counter}>12345</span>
            <span className={styles.link}>See all users</span> 
        </div>
        <div className={styles.right}>
            <div  className={styles.percentage, styles.negative}>
                <IoIosArrowUp/>
                20%
            </div>
        </div>
    </div>
  )
}

export default Widget