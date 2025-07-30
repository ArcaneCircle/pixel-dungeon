// TODO
export class Dungeon {
  public static potionOfStrength: int;
  public static scrollsOfUpgrade: int;
  public static scrollsOfEnchantment: int;
  public static dewVial: boolean; // true if the dew vial can be spawned

  public static challenges: int;

  public static hero: any; // TODO: Hero | null;
  //public static  level:  Level | null;

  public static depth: int;
  public static gold: int;
  // Reason of death
  public static resultDescription: string | null;

  public static chapters: Set<int> | null;

  // Hero's field of view
  //public static  visible:  boolean[] = new  Array<boolean>(Level.LENGTH);

  public static nightMode: boolean;

  //public static  droppedItems:  Item[] | null;
}
