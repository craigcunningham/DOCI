import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const players = [
      { id: 11, name: 'Khris Davis'},
      { id: 21, name: 'Ryan Zimmerman'},
      { id: 31, name: 'Anthony Rendon'},
      { id: 41, name: 'Max Scherzer'},
      { id: 51, name: 'Sean Doolittle'},
      { id: 61, name: 'Mookie Betts'},
      { id: 71, name: 'Chris Sale'},
      { id: 81, name: 'Juan Soto'},
      { id: 81, name: 'Trae Turner'},
      { id: 101, name: 'Victor Robles'},
      { id: 111, name: 'Adam Eaton'},
      { id: 121, name: 'Jacob deGrom'},
      { id: 131, name: 'Freddie Freeman'}
    ];
    return {players};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(hero => hero.id)) + 1 : 11;
  }
}
