import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';
import { DociOwner } from './dociowner';
import { DociSeason } from './dociseason';

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

      const dociOwners = [
        { id: 1, name: 'Craig Cunningham', email: 'clcunnin@yahoo.com' },
        { id: 2, name: 'Keith Cunningham', email: '' },
        { id: 3, name: 'Corey Ramsden', email: '' },
        { id: 4, name: 'Kirk Cunningham', email: '' },
        { id: 5, name: 'Chris McNeilly', email: '' },
        { id: 6, name: 'Mike Daulton', email: '' },
        { id: 7, name: 'Andrew Newman', email: '' },
        { id: 8, name: 'Matthew Pickner', email: '' },
        { id: 9, name: 'Jeff Klinger', email: '' },
        { id: 10, name: 'Bill Hoehn', email: '' },
        { id: 20, name: 'Dan Shedd', email: '' }
      ];

      const dociTeams = [
        { id: 1, name: 'But Justice', owner: {id: 1, name: 'Craig Cunningham', email: 'clcunnin@yahoo.com'} },
        { id: 2, name: 'Sad Sacks' },
        { id: 3, name: 'Dicks Out for Harambe' },
        { id: 4, name: 'Liquor Cricket' },
        { id: 5, name: 'Neon Tetras' },
        { id: 6, name: 'Chris\'s Mom for $1' },
        { id: 7, name: 'Butterflies & Daisies' },
        { id: 8, name: 'Nosferatu' },
        { id: 9, name: 'Hogan\'s Heroes' },
        { id: 10, name: 'Barely Legal' }
      ];

      const dociSeasons = [
        {id: 1, name: '2017 Season', initialDate: '2017-10-01', supplementalDate: '2017-10-11'},
        {id: 2, name: '2018 Season', initialDate: '2018-10-02', supplementalDate: '2018-10-12'}
      ];

    return {players, dociOwners, dociTeams, dociSeasons };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(players: Player[]): number {
  //  return players.length > 0 ? Math.max(...players.map(hero => hero.id)) + 1 : 11;
 // }
  genId(dociSeasons: DociSeason[]): number {
    return dociSeasons.length > 0 ? Math.max(...dociSeasons.map(season => season.id)) + 1 : 11;
  }
}
