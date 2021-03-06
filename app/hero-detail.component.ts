import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    template: `<div *ngIf="hero">
                <h2>Detail for {{hero.name}}</h2>
                <div><label>id: {{hero.id}}</label></div>
                <div>
                    <label>name: {{hero.name}}</label>
                    <input [(ngModel)]="hero.name" placeholder="name">
                </div>
                <button (click)="goBack()" >Back</button>
                </div>`,
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService, 
        private route: ActivatedRoute, 
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();   
    }
}
