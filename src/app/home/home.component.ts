import { Component, ElementRef, ViewChild } from '@angular/core';

interface FoodCategory {
  name: string;
  image: string;
}

interface Restaurant {
  name: string;
  image: string;
  rating: string;
  time: string;
  cuisine: string;
  area: string;
  offer?: string;
  offerType?: 'orange' | 'purple' | 'gold';
  isVeg?: boolean;
  freeDelivery?: boolean;
  cost?: number;
}

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('categoryCarousel') categoryCarousel?: ElementRef<HTMLDivElement>;
  @ViewChild('chainCarousel') chainCarousel?: ElementRef<HTMLDivElement>;
  selectedCategory = 'All';
  searchTerm = '';
  sortAscending = false;
  categories: FoodCategory[] = [
    { name: 'Masala Dosa', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop' },
    { name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop' },
    { name: 'Filter Coffee', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop' },
    { name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop' },
    { name: 'Kebabs', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop' },
    { name: 'Sourdough Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop' },
    { name: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop' },
    { name: 'South Indian Thali', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop' },
    { name: 'Chaat', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&auto=format&fit=crop' },
    { name: 'Waffles', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&auto=format&fit=crop' },
  ];
  chains: Restaurant[] = [
    { name: 'The Rameshwaram Cafe', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop', rating: '4.7', time: '15-20 mins', cuisine: 'South Indian, Filter Coffee, Snacks', area: 'Indiranagar', offer: 'ITEMS AT ₹149', offerType: 'orange', isVeg: true, freeDelivery: true, cost: 250 },
    { name: 'Meghana Foods', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop', rating: '4.6', time: '20-25 mins', cuisine: 'Biryani, Andhra, North Indian', area: 'Koramangala', offer: '20% OFF UPTO ₹120', offerType: 'purple', freeDelivery: true, cost: 500 },
    { name: 'CTR (Shri Sagar)', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&auto=format&fit=crop', rating: '4.8', time: '15-20 mins', cuisine: 'South Indian, Crispy Dosa, Bajji', area: 'Malleshwaram', isVeg: true, cost: 200 },
    { name: 'Truffles', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop', rating: '4.5', time: '25-30 mins', cuisine: 'American, Burgers, Pasta, Desserts', area: "St. Mark's Road / MG Road", offer: 'BESTSELLER', offerType: 'gold', cost: 650 },
    { name: 'Third Wave Coffee', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop', rating: '4.6', time: '15-20 mins', cuisine: 'Speciality Coffee, Bakery, Desserts', area: 'Koramangala 4th Block', freeDelivery: true, cost: 450 },
    { name: 'Corner House Ice Cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', rating: '4.9', time: '10-15 mins', cuisine: 'Ice Cream Sundaes, DBC, Desserts', area: 'Jayanagar', offer: 'BESTSELLER', offerType: 'gold', cost: 350 },
    { name: 'Hotel Empire', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop', rating: '4.3', time: '30-35 mins', cuisine: 'Kebabs, Biryani, Coin Parota', area: 'Church Street', cost: 550 },
    { name: 'Brik Oven', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop', rating: '4.5', time: '25-30 mins', cuisine: 'Woodfired Sourdough Pizza, Shakes', area: 'Indiranagar 100ft Road', offer: '20% OFF', offerType: 'orange', freeDelivery: true, cost: 700 },
    { name: 'Vidyarthi Bhavan', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop', rating: '4.7', time: '20-25 mins', cuisine: 'Crispy Masala Dosa, Vada, Coffee', area: 'Gandhi Bazaar, Basavanagudi', isVeg: true, cost: 180 },
    { name: "Glen's Bakehouse", image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', rating: '4.4', time: '20-25 mins', cuisine: 'Mini Cupcakes, Red Velvet Cake, Lasagna', area: 'Lavelle Road', cost: 500 },
    { name: 'Toit', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&auto=format&fit=crop', rating: '4.6', time: '30-35 mins', cuisine: 'Woodfired Pizza, Baked Nachos, Wings', area: 'Indiranagar', offer: '10% OFF', offerType: 'purple', cost: 850 },
    { name: 'Nagarjuna', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop', rating: '4.5', time: '25-30 mins', cuisine: 'Andhra Meals, Biryani, Sholay Chicken', area: 'Residency Road', cost: 600 },
  ];
  restaurants: Restaurant[] = [
    ...this.chains,
  ];

  get filteredRestaurants(): Restaurant[] {
    const term = this.searchTerm.trim().toLowerCase();
    const items = this.restaurants.filter((restaurant) => {
      const matchesCategory = this.selectedCategory === 'All' || restaurant.cuisine.toLowerCase().includes(this.selectedCategory.toLowerCase());
      const matchesSearch = !term || `${restaurant.name} ${restaurant.cuisine}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
    return [...items].sort((a, b) => this.sortAscending ? a.rating.localeCompare(b.rating) : b.rating.localeCompare(a.rating));
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  sortRestaurants(): void {
    this.sortAscending = !this.sortAscending;
  }

  scrollContainer(carousel: HTMLElement, direction: 'left' | 'right'): void {
    carousel.scrollBy({ left: direction === 'left' ? -380 : 380, behavior: 'smooth' });
  }

  scrollLeft(carousel: HTMLDivElement): void { this.scrollContainer(carousel, 'left'); }
  scrollRight(carousel: HTMLDivElement): void { this.scrollContainer(carousel, 'right'); }

  onImgError(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.onerror = null;
    image.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop';
  }
}
