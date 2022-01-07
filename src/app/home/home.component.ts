import { Component, OnInit } from '@angular/core';
import TableData from  '../_files/tabledata.json';

interface Announcement{
  name:string,
  type:string,
  file:number,
  action :string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  announcements:Announcement[] = TableData;

ngOnInit(): void {
}
}
