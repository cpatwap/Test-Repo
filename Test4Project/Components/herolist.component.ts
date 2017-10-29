import { Component } from '@angular/core';
import { Hero } from '../Models/hero'

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Prathmesh' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'hero-list',
    templateUrl: '../UI/herolist.html'
})
export class HeroListComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}