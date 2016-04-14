/**
 * Created by superman on 2016/4/14.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {
    getHeroes() {
        return HEROES;
    }
}