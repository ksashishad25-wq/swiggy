import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent {
  offers = [
    { tag: '50% OFF UP TO ₹100', code: 'FEAST50', title: 'Weekend feast', copy: 'Save on orders above ₹499 across Bengaluru.', claimed: false },
    { tag: '₹100 OFF', code: 'BENGALURU100', title: 'City favourites', copy: 'Enjoy a little extra value on local favourites.', claimed: false },
    { tag: 'BUY 1 GET 1', code: 'SWEETDAY', title: 'Dessert day', copy: 'Make your sweet cravings twice as nice.', claimed: false },
  ];
  deals = [
    { label: 'GOLD', title: '₹150 cashback', copy: 'Earn cashback on your next order above ₹399.', redeemed: false },
    { label: 'COMBO', title: 'Free dessert after 2 orders', copy: 'A little reward for keeping your cravings going.', redeemed: false },
    { label: 'NEW USER', title: '₹120 off your first order', copy: 'Welcome to a better way to discover Bengaluru food.', redeemed: false },
  ];
  claim(offer: { claimed: boolean }): void { offer.claimed = true; }
  redeem(deal: { redeemed: boolean }): void { deal.redeemed = true; }
}
