import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngrx-cars-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.css']
})
export class WildComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToCars() {
    this.router.navigate(['/cars']);
  }
}
