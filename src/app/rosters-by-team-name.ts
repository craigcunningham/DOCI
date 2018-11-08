import { Pipe, PipeTransform } from '@angular/core';
import { Roster } from './roster';

@Pipe({
  name: 'filterRostersByTeamName',
  pure: false
})
export class filterRostersByTeamNamePipe implements PipeTransform {
  transform(rosters: Roster[], name: string, position: string): any {
    if (!rosters) {
      return rosters;
    }
    return rosters.filter(
      function(roster) {
        if (roster) {
          return roster.team_name === name && roster.position === position;
        } else {
          return false;
        }
      });
  }
}
