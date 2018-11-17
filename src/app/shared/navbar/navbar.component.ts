import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  collapsed = false;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor() { }

  ngOnInit() {
  }

}
