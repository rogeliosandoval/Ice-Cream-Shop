import { Component, OnInit } from '@angular/core';
import { getSupportedCodeFixes } from 'typescript';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {
  userData: any

  ngOnInit(): void {

  }

  private fetchUserData(error: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject('There was an error fetching the user data')
        } else {
          let data = {
            name: 'Roger',
            email: 'rogelio.g.sandoval@gmail.com',
            phone: '2105406838',
            skills: [
              'Angular',
              'HTML',
              'CSS',
              'TypeScript',
              'RxJS'
            ]
          }
          resolve(data)
        }
      }, 5000)
    })
  }

  private buildDashboard(error: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject('dashboard was not able to build')
        } else {
          resolve('dashboard was built successfully')
          console.log('Dashboard has completed')
        }
      }, 2000)
    })
  }

  private sayHello() {
    setTimeout(() => {
      console.log('Hello')
    }, 3000)
  }

  public async login() {
    console.log('loading...')

    await this.fetchUserData(false)

    await this.buildDashboard(false)

    // this.fetchUserData(false).then((value) => {
    //   this.buildDashboard(false).then((value) => {

    //   })
    // })
  }




}