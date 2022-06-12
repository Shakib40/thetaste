import { combineReducers , configureStore } from '@reduxjs/toolkit'
import { HYDRATE , createWrapper}  from 'next-redux-wrapper'

// import users from './userSlice'
import order from './counterSlice' 


const combinedReducers = combineReducers({
    OrderState : order
})

// const masterReducers = (state , action) =>{
//    if(action.type === HYDRATE){
//        const nextState = {
//            ...state,
//            order:{
//                order : [  ]
//            }
//        }
//    }

// }


export const makeStore = () => 
configureStore({
    reducer: combinedReducers
})

export const wrapper  = createWrapper(makeStore)
