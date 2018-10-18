import { filterRostersByTeamNamePipe } from './rosters-by-team-name.pipe';

describe('filterRostersByTeamNamePipe', () => {
  it('create an instance', () => {
    const pipe = new filterRostersByTeamNamePipe();
    expect(pipe).toBeTruthy();
  });
});
