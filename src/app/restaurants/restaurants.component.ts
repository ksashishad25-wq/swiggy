import { Component } from '@angular/core';
import { CartService } from '../cart.service';

interface RestaurantCard { name: string; cuisine: string; rating: string; time: string; image: string; area: string; }

@Component({
  standalone: false,
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent {
  constructor(private readonly cartService: CartService) {}
  searchTerm = '';
  selectedFilter = 'All';
  filters = ['All', 'Relevance', 'Delivery Time', 'Rating', 'Pure Veg', 'Offers', 'Cost: Low to High'];
  restaurants: RestaurantCard[] = [
    { name: 'The Rameshwaram Cafe', cuisine: 'South Indian, Filter Coffee, Snacks', rating: '4.7', time: '15-20 mins', area: 'Indiranagar', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=85' },
    { name: 'Meghana Foods', cuisine: 'Biryani, Andhra, North Indian', rating: '4.6', time: '20-25 mins', area: 'Koramangala', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=85' },
    { name: 'CTR (Shri Sagar)', cuisine: 'South Indian, Crispy Dosa, Bajji', rating: '4.8', time: '15-20 mins', area: 'Malleshwaram', image: 'https://images.unsplash.com/photo-1610192244260-44b77d9f0c9e?auto=format&fit=crop&w=900&q=85' },
    { name: 'Truffles', cuisine: 'American, Burgers, Pasta, Desserts', rating: '4.5', time: '25-30 mins', area: "St. Mark's Road / MG Road", image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85' },
    { name: 'Third Wave Coffee', cuisine: 'Speciality Coffee, Bakery, Desserts', rating: '4.6', time: '15-20 mins', area: 'Koramangala 4th Block', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85' },
    { name: 'Corner House Ice Cream', cuisine: 'Ice Cream Sundaes, DBC, Desserts', rating: '4.9', time: '10-15 mins', area: 'Jayanagar', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85' },
    { name: 'Hotel Empire', cuisine: 'Kebabs, Biryani, Coin Parota', rating: '4.3', time: '30-35 mins', area: 'Church Street', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85' },
    { name: 'Brik Oven', cuisine: 'Woodfired Sourdough Pizza, Shakes', rating: '4.5', time: '25-30 mins', area: 'Indiranagar 100ft Road', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85' },
    { name: 'Vidyarthi Bhavan', cuisine: 'Crispy Masala Dosa, Vada, Coffee', rating: '4.7', time: '20-25 mins', area: 'Gandhi Bazaar, Basavanagudi', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=85' },
    { name: "Glen's Bakehouse", cuisine: 'Mini Cupcakes, Red Velvet Cake, Lasagna', rating: '4.4', time: '20-25 mins', area: 'Lavelle Road', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85' },
    { name: 'Toit', cuisine: 'Woodfired Pizza, Baked Nachos, Wings', rating: '4.6', time: '30-35 mins', area: 'Indiranagar', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85' },
    { name: 'Nagarjuna', cuisine: 'Andhra Meals, Biryani, Sholay Chicken', rating: '4.5', time: '25-30 mins', area: 'Residency Road', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=85' },
  ];

  get filteredRestaurants(): RestaurantCard[] {
    const term = this.searchTerm.toLowerCase().trim();
    return this.restaurants.filter((restaurant) => {
      const categoryMatch = this.selectedFilter === 'All' || this.selectedFilter === 'Relevance' || this.selectedFilter === 'Rating' || this.selectedFilter === 'Offers' || this.selectedFilter === 'Cost: Low to High' || (this.selectedFilter === 'Delivery Time' && Number.parseInt(restaurant.time, 10) <= 25) || (this.selectedFilter === 'Pure Veg' && restaurant.cuisine.includes('South Indian'));
      return categoryMatch && (!term || `${restaurant.name} ${restaurant.cuisine} ${restaurant.area}`.toLowerCase().includes(term));
    });
  }

  onImgError(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.onerror = null;
    image.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop';
  }

  addToCart(restaurant: RestaurantCard): void {
    this.cartService.addToCart({ id: restaurant.name, name: restaurant.cuisine.split(',')[0], restaurant: restaurant.name, price: 299 });
  }
}
