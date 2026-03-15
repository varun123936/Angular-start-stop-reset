import { Component } from '@angular/core';
import { ProductCartService } from '../../service/product-cart.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, AsyncPipe, CardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems$: Observable<any[]>;

  constructor(private cartService: ProductCartService) {
    this.cartItems$ = this.cartService.cartItems$;
  }
}
