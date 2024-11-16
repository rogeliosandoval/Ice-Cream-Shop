import { Component, OnInit, inject, signal } from '@angular/core';
// HTTPClient allows us to work with Observables (AKA data from an API)
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../../interfaces/menu.interfaces';
// RxJS (Reactive Extensions for JavaScript) is for working with asynchronous data such as Observables
import { filter, firstValueFrom, map } from 'rxjs';

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
  public showData = signal<boolean>(false)
  public showError = signal<boolean>(false)

  // constructor(
  //   private http: HttpClient
  // ){}

  // Angular Lifecycle Hook (ngOnInit calls functions when component/page is initialized)
  ngOnInit(): void {
    setTimeout(() => {
      // This is returning an Observable (you must always subscribe to get data)
      this.http.get<MenuItem[]>(this.api)
      .subscribe({
        next: response => {
          this.iceCreams.set(response)
        },
        error: error => {
          this.showError.set(true)
          throw error
        },
        complete: () => {
          this.showData.set(true)
        }
      })
    }, 3000)
  }
}
