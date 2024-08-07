import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

export const groceryAction = createActionGroup({
    source: 'Grocery Api',
    events: {
        'Load Groceries': emptyProps(),
        'Load Groceries Success': props<{payload: Grocery[]}>(),
        'Load Groceries Failure': emptyProps(),
    }
});