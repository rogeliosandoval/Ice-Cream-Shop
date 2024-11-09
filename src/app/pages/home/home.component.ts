import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedService } from '../../services/shared.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public sharedService = inject(SharedService)

  ngOnInit(): void {
      if (this.sharedService.userData.permissions === 'admin') {
        console.log('Roger is an Admin, show admin details')
      } else {
        console.log('Roger is not an admin')
      }
  }
}
