import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
name:string="c++"
condition:string="good"
username:string="reem "
isbn:string="12234"
author:string="zainab"
duedate:string="01/02/2019"
offer:string="borrow"
  constructor() { }

  ngOnInit() {
  }
trade(){
  
}
}
