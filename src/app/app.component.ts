import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROS: Hero[] = [
  { id: 2, name: '時雨'},
  { id: 3, name: '夕立'},
  { id: 4, name: '青葉'},
  { id: 5, name: '霧島'},
  { id: 6, name: '金剛'},
  { id: 7, name: '比叡'},
  { id: 8, name: '榛名'},
  { id: 9, name: '大鳳'},
  { id: 10, name: '大和'},
  { id: 11, name: '川内'},
  { id: 12, name: '那珂'},
  { id: 13, name: '神通'}
]


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul>
      <li *ngFor="let hero of heros" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}}</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
    `,
  styles: [
    ` .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;}
    `
  ]
})
export class AppComponent  {
  title = 'Tour of Heros';
  heros = HEROS;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}

