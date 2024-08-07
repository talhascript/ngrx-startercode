import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectGroceries, selectGroceriesByType } from '../../store/selectors/grocery.selector';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]> = this.store.select(selectGroceries);// same functionality as below
  selectedType = 'undefined'; 
  filteredGroceries$? : Observable<Grocery[]>;

  constructor(private store : Store<{groceries : Grocery[]}>) {
    // this.groceries$ = store.select('groceries'); // same functionality as above
   }



  onTypeChange(event: Event){
    const target = event.target as HTMLSelectElement;
    this.selectedType = target.value;
    console.log(this.selectedType); 
    if (this.selectedType === 'fruit'){
      this.filteredGroceries$ = this.store.select(selectGroceriesByType('fruit'));
    }else if (this.selectedType === 'snacks'){
      this.filteredGroceries$ = this.store.select(selectGroceriesByType('snacks'));
    }else{
      this.filteredGroceries$ = this.store.select(selectGroceries);
    }
    
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }

  this.store.dispatch(addToBucket({payload}));


  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
    }

    this.store.dispatch(removeFromBucket({payload}));



  }

}
