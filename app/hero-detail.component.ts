/**
 * Created by superman on 2016/4/12.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from './hero'
import {HeroService} from "./hero.service";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
    ,
})

export class HeroDetailComponent implements OnInit{
    hero: Hero;

    constructor(private _heroService: HeroService, private _routeParams: RouteParams){}

    ngOnInit(){
        let id = + this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }

    goBack(){
        window.history.back();
    }
}