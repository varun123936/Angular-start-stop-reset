import { Routes } from '@angular/router';
import { ProductComponent } from './siblingCom/product/product.component';
import { CartComponent } from './siblingCom/cart/cart.component';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'cart', component: CartComponent }
];
