import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `<div *ngIf="hero">
                <h2>Detail for {{hero.name}}</h2>
                <div><label>id: {{hero.id}}</label></div>
                <div>
                    <label>name: {{hero.name}}</label>
                    <input [(ngModel)]="hero.name" placeholder="name">
                </div>
                </div>`,
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}
