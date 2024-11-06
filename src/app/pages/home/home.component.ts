import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public iceCreamFlavors = signal<string[]>([
    'Vanilla',
    'Chocolate',
    'Cookies & Cream',
    'Mint',
    'Strawberry',
    'Cherry',
    'Rocky Road'
  ])
}
