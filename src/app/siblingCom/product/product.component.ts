import { Component } from '@angular/core';
import { ProductCartService } from '../../service/product-cart.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Perfect pack for everyday use",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
  };

  constructor(private cartService: ProductCartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
