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
    { name: 'Masala Dosa', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=240&q=85' },
    { name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=240&q=85' },
    { name: 'Filter Coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=240&q=85' },
    { name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=240&q=85' },
    { name: 'Kebabs', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=240&q=85' },
    { name: 'Sourdough Pizza', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=240&q=85' },
    { name: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=240&q=85' },
    { name: 'South Indian Thali', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=240&q=85' },
    { name: 'Chaat', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=240&q=85' },
    { name: 'Waffles', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=240&q=85' },
  ];
  chains: Restaurant[] = [
    { name: 'The Rameshwaram Cafe', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=85', rating: '4.7', time: '15-20 mins', cuisine: 'South Indian, Filter Coffee, Snacks', area: 'Indiranagar', offer: 'ITEMS AT ₹149' },
    { name: 'Meghana Foods', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=600&q=85', rating: '4.6', time: '20-25 mins', cuisine: 'Biryani, Andhra, North Indian', area: 'Koramangala', offer: '20% OFF UPTO ₹120' },
    { name: 'CTR (Shri Sagar)', image: 'https://images.unsplash.com/photo-1610192244260-44b77d9f0c9e?auto=format&fit=crop&w=600&q=85', rating: '4.8', time: '15-20 mins', cuisine: 'South Indian, Crispy Dosa, Bajji', area: 'Malleshwaram' },
    { name: 'Truffles', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=85', rating: '4.5', time: '25-30 mins', cuisine: 'American, Burgers, Pasta, Desserts', area: "St. Mark's Road / MG Road" },
    { name: 'Third Wave Coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=85', rating: '4.6', time: '15-20 mins', cuisine: 'Speciality Coffee, Bakery, Desserts', area: 'Koramangala 4th Block' },
    { name: 'Corner House Ice Cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=85', rating: '4.9', time: '10-15 mins', cuisine: 'Ice Cream Sundaes, DBC, Desserts', area: 'Jayanagar', offer: 'BESTSELLER' },
    { name: 'Hotel Empire', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=85', rating: '4.3', time: '30-35 mins', cuisine: 'Kebabs, Biryani, Coin Parota', area: 'Church Street' },
    { name: 'Brik Oven', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=85', rating: '4.5', time: '25-30 mins', cuisine: 'Woodfired Sourdough Pizza, Shakes', area: 'Indiranagar 100ft Road' },
    { name: 'Vidyarthi Bhavan', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=85', rating: '4.7', time: '20-25 mins', cuisine: 'Crispy Masala Dosa, Vada, Coffee', area: 'Gandhi Bazaar, Basavanagudi' },
    { name: "Glen's Bakehouse", image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85', rating: '4.4', time: '20-25 mins', cuisine: 'Mini Cupcakes, Red Velvet Cake, Lasagna', area: 'Lavelle Road' },
    { name: 'Toit', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=85', rating: '4.6', time: '30-35 mins', cuisine: 'Woodfired Pizza, Baked Nachos, Wings', area: 'Indiranagar' },
    { name: 'Nagarjuna', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=600&q=85', rating: '4.5', time: '25-30 mins', cuisine: 'Andhra Meals, Biryani, Sholay Chicken', area: 'Residency Road' },
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
