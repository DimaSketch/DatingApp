import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response =>this.users = response,                         // gets response from observable above and further stores it into users.
      error: error => console.log(error),                             // if there is an error it gets it and logs it
      complete: () => console.log('Request has completed')            // complete indicates when completed log the following.
    });
  }

}
