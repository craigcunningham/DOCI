import { DociSeason } from "./dociseason";
import { DociTeam } from "./dociteam";
import { Player } from "./player";
/*
export class Roster {
  id: number;
  season: DociSeason;
  team: DociTeam;
  player: Player;
  dateAdded: Date;
}
*/

export class Roster {
  id: number;
  season_id: number;
  team_id: number;
  player_id: number;
  position: string;
  team_name: string;
  player_name: string;
  date_added: Date;
  player_active_ind: boolean;
}
