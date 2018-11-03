import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  projectName = 'Angular 2 Examples';
  projectHomeMenu = 'Home';
  constructor() { }

  ngOnInit() {
  }

}
