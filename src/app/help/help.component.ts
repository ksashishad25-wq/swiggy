import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent {
  topics = [
    { title: 'Order issues', summary: 'Track an order or report a delay.', answer: 'Open your order from the Orders page and choose Get help for live support.', open: false },
    { title: 'Payments & refunds', summary: 'Resolve failures, refunds, and wallet questions.', answer: 'Refunds are returned to the original payment method after the restaurant confirms the cancellation.', open: false },
    { title: 'Account support', summary: 'Update your details and preferences.', answer: 'You can manage your phone number, email, and saved addresses from your account.', open: false },
  ];
}
