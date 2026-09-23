import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface CartItem {
  id: string;
  name: string;
  restaurant: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly cartItems$ = this.itemsSubject.asObservable();
  readonly cartCount$ = this.cartItems$.pipe(map((items) => items.reduce((count, item) => count + item.quantity, 0)));
  readonly subtotal$ = this.cartItems$.pipe(map((items) => items.reduce((total, item) => total + item.price * item.quantity, 0)));

  addToCart(item: Omit<CartItem, 'quantity'>): void {
    const items = [...this.itemsSubject.value];
    const existing = items.find((cartItem) => cartItem.id === item.id);
    if (existing) existing.quantity += 1;
    else items.push({ ...item, quantity: 1 });
    this.itemsSubject.next(items);
  }

  removeFromCart(item: CartItem): void {
    const items = this.itemsSubject.value.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem).filter((cartItem) => cartItem.quantity > 0);
    this.itemsSubject.next(items);
  }
}
