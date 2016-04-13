/**
 * Created by superman on 2016/4/12.
 */
import {Component, Input} from 'angular2/core';
import {Hero} from './hero'

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} detail!</h2>
            <div><label for="">id:</label>{{hero.id}}</div>
            <div>
                <label for="">name:</label>
                <input type="text" [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `,
})

export class HeroDetailComponent {
    @Input()//@Input的作用
    hero: Hero;
}