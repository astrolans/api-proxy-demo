import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
      'Authorization': ''
    })
}

interface IServiceUser {
  ServiceWebId: number;
  Service3Id: number;
  Name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serviceUsers: IServiceUser[] = [];

  constructor(private http: HttpClient) { }

  async loadServiceUsers() {
    this.serviceUsers = await this.http
      .get<IServiceUser[]>('http://localhost:4200/api', httpOptions)
      .toPromise();
  }
}
