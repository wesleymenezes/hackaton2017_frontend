import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'topsection',
  templateUrl: './topsection.component.html',
  styleUrls: ['./topsection.component.css']
})
export class TopSectionComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router) {
    this.routeLinks = [];
  }

  ngOnInit() {
  }

}
