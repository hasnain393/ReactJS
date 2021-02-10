# ReactJS
* Reference:https://github.com/gopinav/React-Redux-Tutorials | https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK
## Redux
* Redux is preditable state container for Javascript Application 
* Store:store holds the state of your Application
```
store{
numOfCake:10
}
```
* Action:that describes the changes in the state of the Application 
```
{
    type:BUY_CAKE,
    info:'First Redux Action'
    }
```
* Action Creator:action creator is a method which returns action
```
function buyCake(){
    return {
    type:BUY_CAKE,
    info:'First redux action'
    }
  }  
```
    
* Action is a simple object that has must have **type** property it can have more properties as well but type property is must
* Action is an Object describing what happened

* Reducer:which actually carries out the state transition depending on the action
```
const reducer =(state,action)=>{
switch (action.type)
{
case: BUY_CAKE : return {
                  numOfCake:state.numOfCake-1
                  }
     default:return state
  }
  } 
  ```
  
* Reducer never  mutate the objects,every single time you must return the new state object
* There are different type of reducer AuthReducer,UserReducer,ProfileReducer
  
```
  const store=createStore(reducer)
  const unsubsribe= store.subscribe( ()=> console.log("updatedd state",store.getState())
  store.dispatch(buyCake())
  
  store.dispatch(buyCake())
  unsubsribe()
```  
 
* store.dispatch(action) calles the reducer function which matches the case and 
  return the new state,andd now the store state is updated so the listener is called 
  
![REDUX](https://user-images.githubusercontent.com/56108097/106353193-c7572080-630e-11eb-9b8f-32fc4e89afa7.jpeg)

* This is a simple React Application ,the state of the application is maintained separately in the **redux store**
* Our Application is always subsribed to this redux store however ,the **Application cannot directly update the state**
* if the Application wants to  update the state **it has to emit|dispatch an action**
* Once **the action has been dispatch the reducer then handles the action** and updates the current state
* As soon as the state is updated the value is then passed on to the application because the Application is subscribed to the store

# Middleware
*  is the suggested way to extend Redux with custom functionality
* Provides a third-party extension point between dispatching an action and the moment it reaches the reducer
* use  Middleware for logging ,perform asynchronous task ,crash reporting
* store.dispatch(action) ->Middleware ->Reducer 
 
 ```
 npm install redux-logger
 const reduxLogger=require('redux-logger')
 const applyMiddleware=redux.applyMiddleware
 const Logger =reduxLogger.createLoger()
 
 const store= createStore(rootReducer,applyMiddlewware(Logger))
 ```
 
 ```
 const axios= require('axios')
const redux = require('redux')
const createStore =redux.createStore
const thunkMiddleware=require('redux-thunk').default
const applyMiddleware=redux.applyMiddleware


const store=createStore(reducer,applyMiddleware(thunkMiddleware));
```

## Async Action 

* Asyn action :Asynchronous API call to fetch data from an end point and use that data in our Application
* for this we require axios and redux-thunk
* Redux-thunk : we have learned that action creator return an action ie a simple object with type property
* but whta the thunk middleware brings to the table is the ability to return the function instead og action object
* What is special about this function is that it doesnot have to be pure so it is allowed to have side effect like async API call and
 this function can dispatch action because it receieve dispatch method as argument 
 
 ![MicrosoftTeams-image](https://user-images.githubusercontent.com/56108097/106365018-c6e37780-6358-11eb-99ab-a57bb55b8823.png)
 
 ![MicrosoftTeams-image (1)](https://user-images.githubusercontent.com/56108097/106365085-23df2d80-6359-11eb-851a-fdbdb8dade5f.png)
 
 ![MicrosoftTeams-image (2)](https://user-images.githubusercontent.com/56108097/106365472-de702f80-635b-11eb-9852-eb93d6c6a9f6.png)
 
 ![MicrosoftTeams-image (3)](https://user-images.githubusercontent.com/56108097/106367147-84289c00-6366-11eb-988b-236f5051cce7.png)
 
 ![MicrosoftTeams-image (4)](https://user-images.githubusercontent.com/56108097/106376936-69364600-63bf-11eb-9ff2-3a5dd1f6820d.png)
 
 ![IMG_20210209_202959](https://user-images.githubusercontent.com/56108097/107382439-e0817d80-6b15-11eb-9a78-7a0389460ffb.jpg)

* To add new element into array of object dont use **push** as it mutate/change an original array

```
state.push(action.expense)
```

* either use **concat** or **spread** operator
* state.concat(action.expense) -> returns new array
```
state.concat(action.expense)
return [...state,action.expense]
```

## Redux-combineReducers 
* combineReducers allows us to have multiple Reducer
```
const combineReducers =redux.combineReducers
const rootReducer=combineReducers({
    cake:CakeReducer,
    icecream:iceCreamReducer
})
```
* Example of  Redux CombineReducers
```
const  redux =require('redux')
const  creatStore=redux.createStore
const combineReducers =redux.combineReducers

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

const store=creatStore(rootReducer)
```

* Summary

* In **reactJs** to make Asynchronous API call to fetch data from an end point and use that data in our Application  we use Axios or fetch in ComponentDidMount()
* In **Redux**   to make Asynchronous API call to fetch data from an end point and use that data in our Application we take the help of Middleware , redux-thunk and axios and then dispatch the action

```
const axios= require('axios')
const redux = require('redux')
const thunkMiddleware=require('redux-thunk').default
const applyMiddleware=redux.applyMiddleware
const createStore =redux.createStore

//step 3
const fetchUsers=()=>{
    return function(dispatch){
      //step 4  dispatch action & step 5  reducer is called
        dispatch(fetchUsersRequest())
        //step 6 
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
//step 1
const store=createStore(reducer,applyMiddleware(thunkMiddleware));

//step 2
store.dispatch(fetchUsers());

```
  
  
     


