import { Component, OnInit } from '@angular/core';
import * as userData from '../assets/users.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: any = (userData as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userList);
  }

}
