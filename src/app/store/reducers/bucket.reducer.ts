import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { addToBucket, removeFromBucket } from "../actions/bucket.action";


const initialState : Bucket [] = [];



// export const bucketReducer = createReducer( // returns new state
//     initialState,
//     on(addToBucket, (state, action) => {
//         return [...state, action.payload];
//     })
// );

// The addToBucket action is a predefined action that is imported
// from somewhere else in the code. It represents an action that adds an item to the bucket.

// The second argument of the on function is an arrow function that
// takes in the current state (state) and the action (action). 
// Inside the arrow function, a new state is returned by spreading the existing state (...state)
// and appending the action.payload to it. This means that when the addToBucket action is dispatched, 
// the reducer will add the action.payload to the current state.


export const bucketReducer = createReducer(
    initialState,


    on(addToBucket, (state, action) => {
        const bucketItem = state.find(item => item.id === action.payload.id);
        if(bucketItem){
            return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item);
        }else{
            return [...state, action.payload];
        }
    }),


    on(removeFromBucket, (state, action) => {
        const existingItem = state.find(item => item.id === action.payload.id);
        if(existingItem && existingItem.quantity > 1){
            return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item);
        }else{
            return state.filter(item => item.id !== action.payload.id);
        }
    })
);