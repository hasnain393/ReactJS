// console.log("hasnain redux demo");


// function add(obj){
//     console.log("received obj",obj);
//     return{
//         ...obj,
//         gender:"female"
//     }
// }


// const res=add({name:"hasnain",gender:"male"})
// console.log(res);


const  redux =require('redux')
const  creatStore=redux.createStore
const BUY_CAKE='BUY_CAKE'
const ADD_CAKE='ADD_CAKE'
const SET_CAKE='SET_CAKE'

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'first redux'
    }
}


function addCake(){
    return {
        type:ADD_CAKE,
        info:'first redux'
    }
}

function setCake(){
    return {
        type:SET_CAKE,
        info:'first redux'
    }
}

const initialState={
    numofcake:10
}


const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            
           return {
            ...state,
            numofcake:state.numofcake-1
            }

            case ADD_CAKE:
                return{
                    ...state,
                    numofcake:state.numofcake+1
                }
                case SET_CAKE:
                return{
                    ...state,
                    numofcake:0
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
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(setCake())
store.dispatch(addCake())
store.dispatch(addCake())



unsubscribe()