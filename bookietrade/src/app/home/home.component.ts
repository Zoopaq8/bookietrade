import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Books=[{id:1,m:"c++"},{id:2,m:"java"},{id:3,m:"gone with the wind"},{id:4,m:"English"},{id:4,m:"c++"},{id:5,m:"java"},{id:6,m:"gone with the wind"},{id:7,m:"English"},{id:8,m:"c++"},{id:9,m:"java"},{id:10,m:"gone with the wind"}]
  constructor() { }

  ngOnInit() {
  }

}
