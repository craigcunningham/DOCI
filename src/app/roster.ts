import { DociSeason } from "./dociseason";
import { DociTeam } from "./dociteam";
import { Player } from "./player";

export class Roster {
  id: number;
  season: DociSeason;
  team: DociTeam;
  player: Player;
  dateAdded: Date;
}
