const {createStore} = require('redux')
//defining constants
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
// initial state
const initailState = {
    count: 0
}
// increment action 
const incrementCounter = ()=>{
    return{
        type:INCREMENT
    }
}
// decrement action 
const decrementCounter = ()=>{
    return{
        type:DECREMENT
    }
}
// reset action
const resetCounter = ()=>{
    return{
        type:RESET
    }
}
//create rducer
const counterReducer = (state=initailState,action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count -1
            }
        case RESET:
            return{
                ...state,
                count: 0
            }
        default:
        state;
    }
}
// create store
const store = createStore(counterReducer) 
store.subscribe(()=>{
    console.log(store.getState())
})
// dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())
