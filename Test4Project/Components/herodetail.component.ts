import { Component, Input } from '@angular/core';
import { Hero } from '../Models/hero'

@Component({
    selector: 'hero-detail',
    templateUrl: '../UI/herodetail.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}