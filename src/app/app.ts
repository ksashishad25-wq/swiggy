import { Component } from '@angular/core';
import { CartItem, CartService } from './cart.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  locationOpen = false;
  cartOpen = false;
  selectedLocation = 'Bengaluru, Karnataka';

  constructor(private readonly cartService: CartService) {}

  get cartItems$() { return this.cartService.cartItems$; }
  get cartCount$() { return this.cartService.cartCount$; }
  get subtotal$() { return this.cartService.subtotal$; }

  toggleLocation(): void {
    this.locationOpen = !this.locationOpen;
  }

  selectLocation(location: string): void {
    this.selectedLocation = location;
    this.locationOpen = false;
  }

  toggleCart(): void { this.cartOpen = !this.cartOpen; }
  removeItem(item: CartItem): void { this.cartService.removeFromCart(item); }
}
