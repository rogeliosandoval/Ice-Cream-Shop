import { Component, OnInit, inject, signal } from '@angular/core';
// HTTPClient allows us to work with Observables (AKA data from an API)
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../../interfaces/menu.interfaces';
// RxJS (Reactive Extensions for JavaScript) is for working with asynchronous data such as Observables
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  private http = inject(HttpClient)
  private api = 'https://672ec227229a881691f0d9bf.mockapi.io/scoop/iceCreams'
  // public iceCreams = signal<MenuItem[]>([])
  public iceCreams = signal<MenuItem[]>([{
    id: 0,
    name: '',
    price: 0,
    calories: 0,
    category: '',
    description: ''
  }])

  // Angular Lifecycle Hook (ngOnInit calls functions when component/page is initialized)
  ngOnInit(): void {
    // This is returning an Observable (you must always subscribe to get data)
    this.http.get<MenuItem[]>(this.api)
    .pipe (
      // RxJS operator 'filter' is acting as just a check. It does not modify data at all
      // filter((value: MenuItem[]) => value.some(item => item.category === 'classic'))
      // RxJs operator 'map' modifies the data coming in from the APi
      map((value: MenuItem[]) => value.filter((item: MenuItem) => item.price <= 5))
    )
    .subscribe({
      next: response => {
        this.iceCreams.set(response)
      },
      error: error => {
        throw error
      },
      complete: () => {
        console.log('the subscription completed')
      }
    })
  }
}
