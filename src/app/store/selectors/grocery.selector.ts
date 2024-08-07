import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


export const selectGroceries = createFeatureSelector<Grocery[]>('groceries') // selects all groceries

export const selectGroceriesByType = (type : string) => createSelector(
    selectGroceries, // first selects all groceries
    (state) => {
        return state.filter((grocery) => grocery.type === type) // only return type of food
    }
)

// The filter method creates a new array containing
// only the groceries that satisfy the provided condition.
// Finally, the filtered array of groceries is returned by the anonymous function, 
// which becomes the output of the selectGroceriesByType selector.

