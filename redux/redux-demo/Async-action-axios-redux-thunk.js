const axios= require('axios')
const redux = require('redux')
const thunkMiddleware=require('redux-thunk').default
const applyMiddleware=redux.applyMiddleware

const createStore =redux.createStore

const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE="FETCH_USERS_FAILURE"

const initialState={
    loading:false,
    data:[],
    error:""
}
function fetchUsersRequest(){
    return {
        type:FETCH_USERS_REQUEST
    }
}

function fetchUsersSuccess(users){
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

function fetchUsersFailure(error){
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            
            return{
                ...state,
                loading:true

            }

            case FETCH_USERS_SUCCESS:
            
            return{
                loading:false,
                data:action.payload,
                error:""

            }
    
            
            case FETCH_USERS_FAILURE:
            
            return{
                loading:false,
                data:[],
                error:action.payload

            }
        default:
            return state;
    }
}

const fetchUsers=()=>{
    return function(dispatch){
      
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
           // console.log(response.data);
            const users=response.data.map((user)=>{
                return  user.name}
            )
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error)=>{
            //console.log(error);
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
const store=createStore(reducer,applyMiddleware(thunkMiddleware));

store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(fetchUsers());
