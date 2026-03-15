import { Component } from '@angular/core';
import { CartComponent } from './siblingCom/cart/cart.component';
import { ProductComponent } from './siblingCom/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startStopReset';
}
