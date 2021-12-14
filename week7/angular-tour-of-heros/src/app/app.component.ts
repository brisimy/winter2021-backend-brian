import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { "hello";

  }
  constructor()  {}

  ngOnInit(): void {
    console.log("Created a Heroes component!");
  }
}
