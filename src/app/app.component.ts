import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { groceryAction } from './store/actions/grocery.action';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BucketComponent,GroceryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Declare the 'store' property
  constructor(private store: Store <{grocery : GroceryComponent}>) {}

  ngOnInit(){
    console.log('App Component Loaded');
    this.store.dispatch(groceryAction.loadGroceries());
    console.log('App Data Initialised');
  }

}

