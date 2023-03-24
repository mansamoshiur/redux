const {createStore} = require('redux')
//defining constants
const ADD_USER = "ADD_USER"

// initial state
const initailState = {
    users:['Mansa Moshiur'],
    count: 1
}
// increment action 
const addUser = (user)=>{
    return{
        type:ADD_USER,
        payload: user
    }
}

//create rducer
const userReducer = (state=initailState,action) =>{
    switch(action.type){
        case ADD_USER:
            return{
                users:[...state.users, action.payload],
                count: state.count + 1,
            }
        default:
        state;
    }
}
// create store
const store = createStore(userReducer) 
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addUser('Rhaman'))
store.dispatch(addUser('Rhaman Moshiur'))
