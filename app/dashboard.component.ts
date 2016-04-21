/**
 * Created by superman on 2016/4/20.
 */
import {Component, OnInit} from "angular2/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
})

export class DashboardComponent implements OnInit{
    heroes: Hero [];

    constructor(private _heroService: HeroService){

    }

    ngOnInit(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    getDetail(){
        
    }
}