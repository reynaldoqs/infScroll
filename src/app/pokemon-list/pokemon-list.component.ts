import { Component, OnInit } from '@angular/core';
import { PokeService } from '../servives/poke.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'audi-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  animations: [
    trigger('itemAnimation', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0, transform: 'scale(1.2) translateY(100%)',
          boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'}),
          stagger(100, [
            animate('200ms ease-in', style('*'))
          ])
        ], {optional: true})

      ])
    ])
  ]
})
export class PokemonListComponent implements OnInit {

  pokemons = new BehaviorSubject([]);
  animationState = false;
  group = 15;
  endkey = '';
  finished = false;
  constructor(private _pokeService: PokeService) { }
  ngOnInit() {
    this.getImages();
  }
  onScroll() {
    this.getImages();
  }
  private getImages(key?) {
    // tslint:disable-next-line:curly
    if (this.finished) return;

    this._pokeService.getImages(this.group + 1, this.endkey)
      .do(pokemons => {
        this.endkey = _.last(pokemons)['$key'];
        const newPokemons = _.slice(pokemons, 0, this.group);
        const currentPokemons = this.pokemons.getValue();
        if (this.endkey === _.last(newPokemons)['$key']) {
          this.finished = true;
        }
        this.pokemons.next(_.concat(currentPokemons, newPokemons));
      })
      .take(1)
      .subscribe(
        () => this.animationState = !this.animationState
      );
  }

}
