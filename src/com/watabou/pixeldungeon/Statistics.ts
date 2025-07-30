export class Statistics {
  public static goldCollected = 0;
  public static deepestFloor = 0;
  public static enemiesSlain = 0;
  public static foodEaten = 0;
  public static potionsCooked = 0;
  public static piranhasKilled = 0;
  public static nightHunt = 0;
  public static ankhsUsed = 0;

  public static duration = 0;

  public static qualifiedForNoKilling: boolean = false;
  public static completedWithNoKilling: boolean = false;

  public static amuletObtained: boolean = false;

  private static readonly GOLD = "score";
  private static readonly DEEPEST = "maxDepth";
  private static readonly SLAIN = "enemiesSlain";
  private static readonly FOOD = "foodEaten";
  private static readonly ALCHEMY = "potionsCooked";
  private static readonly PIRANHAS = "priranhas";
  private static readonly NIGHT = "nightHunt";
  private static readonly ANKHS = "ankhsUsed";
  private static readonly DURATION = "duration";
  private static readonly AMULET = "amuletObtained";

  public static reset(): void {
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

  public static storeInBundle(bundle: any): void {
    // TODO
    bundle.put(Statistics.GOLD, Statistics.goldCollected);
    bundle.put(Statistics.DEEPEST, Statistics.deepestFloor);
    bundle.put(Statistics.SLAIN, Statistics.enemiesSlain);
    bundle.put(Statistics.FOOD, Statistics.foodEaten);
    bundle.put(Statistics.ALCHEMY, Statistics.potionsCooked);
    bundle.put(Statistics.PIRANHAS, Statistics.piranhasKilled);
    bundle.put(Statistics.NIGHT, Statistics.nightHunt);
    bundle.put(Statistics.ANKHS, Statistics.ankhsUsed);
    bundle.put(Statistics.DURATION, Statistics.duration);
    bundle.put(Statistics.AMULET, Statistics.amuletObtained);
  }

  public static restoreFromBundle(bundle: any): void {
    // TODO
    Statistics.goldCollected = bundle.getInt(Statistics.GOLD);
    Statistics.deepestFloor = bundle.getInt(Statistics.DEEPEST);
    Statistics.enemiesSlain = bundle.getInt(Statistics.SLAIN);
    Statistics.foodEaten = bundle.getInt(Statistics.FOOD);
    Statistics.potionsCooked = bundle.getInt(Statistics.ALCHEMY);
    Statistics.piranhasKilled = bundle.getInt(Statistics.PIRANHAS);
    Statistics.nightHunt = bundle.getInt(Statistics.NIGHT);
    Statistics.ankhsUsed = bundle.getInt(Statistics.ANKHS);
    Statistics.duration = bundle.getFloat(Statistics.DURATION);
    Statistics.amuletObtained = bundle.getBoolean(Statistics.AMULET);
  }
}
