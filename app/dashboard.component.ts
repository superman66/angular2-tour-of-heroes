/**
 * Created by superman on 2016/4/20.
 */
import {Component, OnInit} from "angular2/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {RouteParams, Router} from "angular2/router";
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['statics/dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes: Hero [];

    constructor(private _heroService: HeroService, private _router: Router){

    }

    ngOnInit(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail(hero: Hero){
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);
    }
}