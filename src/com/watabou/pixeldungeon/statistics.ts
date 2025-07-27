export class Statistics {
  private static readonly GOLD = "Statistics.gold";
  private static readonly DEEPEST = "Statistics.maxDepth";
  private static readonly SLAIN = "Statistics.enemiesSlain";
  private static readonly FOOD = "Statistics.foodEaten";
  private static readonly ALCHEMY = "Statistics.potionsCooked";
  private static readonly PIRANHAS = "Statistics.priranhas";
  private static readonly NIGHT = "Statistics.nightHunt";
  private static readonly ANKHS = "Statistics.ankhsUsed";
  private static readonly DURATION = "Statistics.duration";
  private static readonly AMULET = "Statistics.amuletObtained";

  public static goldCollected = 0;
  public static deepestFloor = 0;
  public static enemiesSlain = 0;
  public static foodEaten = 0;
  public static potionsCooked = 0;
  public static piranhasKilled = 0;
  public static nightHunt = 0;
  public static ankhsUsed = 0;

  public static duration = 0;

  public static qualifiedForNoKilling = false;
  public static completedWithNoKilling = false;

  public static amuletObtained = false;

  public static reset() {
    Statistics.goldCollected = 0;
    Statistics.deepestFloor = 0;
    Statistics.enemiesSlain = 0;
    Statistics.foodEaten = 0;
    Statistics.potionsCooked = 0;
    Statistics.piranhasKilled = 0;
    Statistics.nightHunt = 0;
    Statistics.ankhsUsed = 0;

    Statistics.duration = 0;

    Statistics.qualifiedForNoKilling = false;

    Statistics.amuletObtained = false;
  }

  public static save() {
    localStorage[Statistics.GOLD] = Statistics.goldCollected;
    localStorage[Statistics.DEEPEST] = Statistics.deepestFloor;
    localStorage[Statistics.SLAIN] = Statistics.enemiesSlain;
    localStorage[Statistics.FOOD] = Statistics.foodEaten;
    localStorage[Statistics.ALCHEMY] = Statistics.potionsCooked;
    localStorage[Statistics.PIRANHAS] = Statistics.piranhasKilled;
    localStorage[Statistics.NIGHT] = Statistics.nightHunt;
    localStorage[Statistics.ANKHS] = Statistics.ankhsUsed;
    localStorage[Statistics.DURATION] = Statistics.duration;
    localStorage[Statistics.AMULET] = Statistics.amuletObtained ? 1 : 0;
  }

  public static load() {
    Statistics.goldCollected = parseInt(localStorage[Statistics.GOLD]);
    Statistics.deepestFloor = parseInt(localStorage[Statistics.DEEPEST]);
    Statistics.enemiesSlain = parseInt(localStorage[Statistics.SLAIN]);
    Statistics.foodEaten = parseInt(localStorage[Statistics.FOOD]);
    Statistics.potionsCooked = parseInt(localStorage[Statistics.ALCHEMY]);
    Statistics.piranhasKilled = parseInt(localStorage[Statistics.PIRANHAS]);
    Statistics.nightHunt = parseInt(localStorage[Statistics.NIGHT]);
    Statistics.ankhsUsed = parseInt(localStorage[Statistics.ANKHS]);
    Statistics.duration = parseFloat(localStorage[Statistics.DURATION]);
    Statistics.amuletObtained = parseInt(localStorage[Statistics.AMULET]) === 1;
  }
}
