import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


export const selectGroceries = createFeatureSelector<Grocery[]>('groceries')

export const selectGroceriesByType = createSelector(
    selectGroceries,
    (state) => {
        return state.filter((grocery) => grocery.type === 'fruit')
    }
)