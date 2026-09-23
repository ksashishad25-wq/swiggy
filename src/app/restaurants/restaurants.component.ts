import { Component } from '@angular/core';
import { CartService } from '../cart.service';

interface RestaurantCard { name: string; cuisine: string; rating: string; time: string; image: string; area: string; cost: number; isVeg?: boolean; freeDelivery?: boolean; offer?: string; }

@Component({
  standalone: false,
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent {
  constructor(private readonly cartService: CartService) {}
  searchTerm = '';
  selectedNeighborhood = 'All Bengaluru';
  pureVegOnly = false;
  freeDeliveryOnly = false;
  ratingOnly = false;
  offersOnly = false;
  sortBy = 'Relevance (Default)';
  neighborhoods = ['All Bengaluru', 'Koramangala', 'Indiranagar', 'Malleshwaram', 'HSR Layout', 'MG Road / Church Street', 'Jayanagar'];
  sortOptions = ['Relevance (Default)', 'Delivery Time: Fast First', 'Rating: High to Low', 'Cost: Low to High', 'Cost: High to Low'];
  restaurants: RestaurantCard[] = [
    { name: 'The Rameshwaram Cafe', cuisine: 'South Indian, Filter Coffee, Snacks', rating:'4.7', time:'15-20 mins', area:'Indiranagar', cost:250, isVeg:true, freeDelivery:true, offer:'ITEMS AT ₹149', image:'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop' },
    { name: 'Meghana Foods', cuisine:'Biryani, Andhra, North Indian', rating:'4.6', time:'20-25 mins', area:'Koramangala', cost:500, freeDelivery:true, offer:'20% OFF', image:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop' },
    { name: 'CTR (Shri Sagar)', cuisine:'South Indian, Crispy Dosa, Bajji', rating:'4.8', time:'15-20 mins', area:'Malleshwaram', cost:200, isVeg:true, image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&auto=format&fit=crop' },
    { name: 'Truffles', cuisine:'American, Burgers, Pasta, Desserts', rating:'4.5', time:'25-30 mins', area:"St. Mark's Road / MG Road", cost:650, offer:'BESTSELLER', image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop' },
    { name: 'Third Wave Coffee', cuisine:'Speciality Coffee, Bakery, Desserts', rating:'4.6', time:'15-20 mins', area:'Koramangala 4th Block', cost:450, freeDelivery:true, image:'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop' },
    { name: 'Corner House Ice Cream', cuisine:'Ice Cream Sundaes, DBC, Desserts', rating:'4.9', time:'10-15 mins', area:'Jayanagar', cost:350, offer:'BESTSELLER', image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop' },
    { name: 'Hotel Empire', cuisine:'Kebabs, Biryani, Coin Parota', rating:'4.3', time:'30-35 mins', area:'Church Street', cost:550, image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop' },
    { name: 'Brik Oven', cuisine:'Woodfired Sourdough Pizza, Shakes', rating:'4.5', time:'25-30 mins', area:'Indiranagar 100ft Road', cost:700, freeDelivery:true, offer:'20% OFF', image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop' },
    { name:'Vidyarthi Bhavan', cuisine:'Crispy Masala Dosa, Vada, Coffee', rating:'4.7', time:'20-25 mins', area:'Gandhi Bazaar, Basavanagudi', cost:180, isVeg:true, image:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop' },
    { name:"Glen's Bakehouse", cuisine:'Mini Cupcakes, Red Velvet Cake, Lasagna', rating:'4.4', time:'20-25 mins', area:'Lavelle Road', cost:500, image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop' },
    { name:'Toit', cuisine:'Woodfired Pizza, Baked Nachos, Wings', rating:'4.6', time:'30-35 mins', area:'Indiranagar', cost:850, offer:'10% OFF', image:'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&auto=format&fit=crop' },
    { name:'Nagarjuna', cuisine:'Andhra Meals, Biryani, Sholay Chicken', rating:'4.5', time:'25-30 mins', area:'Residency Road', cost:600, image:'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop' },
  ];

  get filteredRestaurants(): RestaurantCard[] {
    const term = this.searchTerm.toLowerCase().trim();
    const items = this.restaurants.filter((restaurant) => {
      const neighborhoodMatch = this.selectedNeighborhood === 'All Bengaluru' || restaurant.area.includes(this.selectedNeighborhood.split(' / ')[0]);
      return neighborhoodMatch && (!term || `${restaurant.name} ${restaurant.cuisine} ${restaurant.area}`.toLowerCase().includes(term)) && (!this.pureVegOnly || restaurant.isVeg) && (!this.freeDeliveryOnly || restaurant.freeDelivery) && (!this.ratingOnly || Number(restaurant.rating) >= 4) && (!this.offersOnly || restaurant.offer);
    });
    return [...items].sort((a, b) => this.sortBy === 'Delivery Time: Fast First' ? parseInt(a.time) - parseInt(b.time) : this.sortBy === 'Rating: High to Low' ? Number(b.rating) - Number(a.rating) : this.sortBy === 'Cost: Low to High' ? a.cost - b.cost : this.sortBy === 'Cost: High to Low' ? b.cost - a.cost : 0);
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
