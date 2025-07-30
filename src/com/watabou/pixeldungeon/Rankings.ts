import { Statistics } from "./Statistics";
import { Dungeon } from "./Dungeon";
import { Badges } from "./Badges";

interface Record {
  playerId: string;
  playerName: string;
  info: string;
  win: boolean;
  heroClass: string; // TODO: HeroClass
  armorTier: string;
  score: number;
}

export class Rankings {
  public static readonly TABLE_SIZE: number = 6;

  public static records: Record[] = [];
  public static totalNumber: number = 0;
  public static wonNumber: number = 0;

  public static submit(win: boolean): void {
    const rec = {
      info: Dungeon.resultDescription,
      win: win,
      heroClass: Dungeon.hero.heroClass,
      armorTier: Dungeon.hero.tier(),
      score: Rankings.score(win),
      playerId: window.webxdc.selfAddr,
      playerName: window.webxdc.selfName,
    };
    const info = `${rec.playerName}: ${rec.info}`;
    window.webxdc.sendUpdate({ payload: rec, info }, "");

    Badges.validateGamesPlayed();
  }

  private static score(win: boolean): number {
    return (
      (Statistics.goldCollected +
        Dungeon.hero.lvl * Statistics.deepestFloor * 100) *
      (win ? 2 : 1)
    );
  }

  public static save(): void {
    Rankings.records.sort((a, b) => b.score - a.score);
    Rankings.records.splice(Rankings.TABLE_SIZE);
    localStorage.records = JSON.stringify(Rankings.records);
    localStorage.totalNumber = Rankings.totalNumber;
    localStorage.wonNumber = Rankings.wonNumber;
  }

  public static load(): void {
    this.records = JSON.parse(localStorage.records || "[]");
    this.totalNumber = parseInt(localStorage.totalNumber || "0");
    this.wonNumber = parseInt(localStorage.wonNumber || "0");
  }

  public static onRecord(record: Record) {
    this.records.push(record);
    const selfId = window.webxdc.selfAddr;
    if (record.playerId === selfId) {
      ++Rankings.totalNumber;
      if (record.win) ++Rankings.wonNumber;
    }
  }
}
