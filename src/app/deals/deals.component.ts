import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent {
  deals = [
    { label: 'GOLD', title: '₹150 cashback', copy: 'Earn cashback on your next order above ₹399.', redeemed: false },
    { label: 'COMBO', title: 'Free dessert after 2 orders', copy: 'A little reward for keeping your cravings going.', redeemed: false },
    { label: 'NEW USER', title: '₹120 off your first order', copy: 'Welcome to a better way to discover Bengaluru food.', redeemed: false },
  ];
  redeem(deal: { redeemed: boolean }): void { deal.redeemed = true; }
}
