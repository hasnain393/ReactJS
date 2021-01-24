const  redux =require('redux')
const  creatStore=redux.createStore

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


const initialState={
    numofcake:10,
    numoficeCream:50
}

//single reducer for both cake and ice cream
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            
           return {
            ...state,
            numofcake:state.numofcake-1
            }

            case BUY_ICECREAM:
                
                return{
                    ...state,
                    numoficeCream:state.numoficeCream-1
                }
                
    
        default:
         return state
    }
}

const store=creatStore(reducer)
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