import { Level } from "./levels/level.ts";

export class Dungeon {
  public static potionOfStrength = 0;
  public static scrollsOfUpgrade = 0;
  public static scrollsOfEnchantment = 0;
  public static dewVial = false; // true if the dew vial can be spawned

  public static challenges = 0;

  public static hero: any; // TODO: create class Hero
  public static level: Level; // TODO: not fully ported, initial value not used

  public static depth = 0;
  public static gold = 0;
  // Reason of death
  public static resultDescription: String;

  public static chapters: any; // TODO: HashSet<Integer>

  // Hero's field of view
  public static visible = new Array<boolean>(Level.LENGTH); // TODO: not fully ported, initial value not used

  public static nightMode = false;

  public static droppedItems: any; // TODO: SparseArray<ArrayList<Item>>

  //private static passable = new Array<boolean>(Level.LENGTH); // TODO: not fully ported, initial value not used
}
