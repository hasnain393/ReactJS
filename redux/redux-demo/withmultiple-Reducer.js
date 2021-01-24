const  redux =require('redux')
const  creatStore=redux.createStore
const combineReducers =redux.combineReducers
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'first redux'
    }
}


function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info:'first redux'
    }
}


const initialCakeState={
    numofcake:10,
    
}

const initialiceCreamState={
    numoficeCream:50
}



const CakeReducer=(state=initialCakeState,action)=>{
    switch (action.type) {
        case BUY_CAKE:

            return {
                ...state,
                numofcake:state.numofcake-1
            }
    
        default:
            return state
    }
}

const iceCreamReducer=(state=initialiceCreamState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:

            return {
                ...state,
                numoficeCream:state.numoficeCream-1
            }
    
        default:
            return state
    }
}

const rootReducer=combineReducers({
    cake:CakeReducer,
    icecream:iceCreamReducer
})

//below is a common reducer
// const reducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case BUY_CAKE:
            
//            return {
//             ...state,
//             numofcake:state.numofcake-1
//             }

//             case BUY_ICECREAM:
                
//                 return{
//                     ...state,
//                     numoficeCream:state.numoficeCream-1
//                 }
                
    
//         default:
//          return state
//     }
// }

const store=creatStore(rootReducer)
console.log("initial state",store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log("updated state",store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())



unsubscribe()