import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



// Old code with notes
//export class HeroesComponent implements OnInit {
//   // hero: Hero = {
//   //   id: 1,
//   //   name: 'Windstorm'
//   // };
//   heroes: Hero[] = HEROES;
//   selectedHero: Hero;
//   //define selected hero is of type hero I THINK


//   constructor() { }
 
//   ngOnInit() {
//   }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//     alert('a new hero was selected ' + this.selectedHero.name);
//     console.log('hfkjahfkjhadkjfh');
//   }

//   onHoover(hero: Hero): void {
//     // alert('hover hero ' + hero.name + ' ' + hero.id);
//   }
 
// }