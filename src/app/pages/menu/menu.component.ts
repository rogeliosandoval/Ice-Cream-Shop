import { Component, OnInit, inject, signal } from '@angular/core';
// HTTPClient allows us to work with Observables (AKA data from an API)
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../../interfaces/menu.interfaces';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  private http = inject(HttpClient)
  private api = 'https://672ec227229a881691f0d9bf.mockapi.io/scoop/ice-creams'
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
  
  public iceCreamForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(null),
    calories: new FormControl(null),
    category: new FormControl(''),
    description: new FormControl('')
  })

  ngOnInit(): void {
    setTimeout(() => {
      this.http.get<MenuItem[]>(this.api).subscribe({
        next: response => {
          this.iceCreams.set(response)
          this.showData.set(true)
        },
        error: err => {
          this.showError.set(true)
        },
        complete: () => {
          console.log('The subscription has completed!')
        }
      })
    }, 3000)
  }

  public addItem(): void {

  }

  public deleteItem(): void {

  }

  public updateItem(): void {

  }
}
