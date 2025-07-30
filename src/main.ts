// @ts-ignore
import { gwtOnLoad } from "./game.js";
import { Rankings } from "~/com/watabou/pixeldungeon/Rankings";

Rankings.load();
window.webxdc.setUpdateListener(
  (update) => {
    Rankings.onRecord(update.payload);
    if (update.serial === update.max_serial) {
      localStorage.maxSerial = update.max_serial;
      Rankings.save();
    }
  },
  parseInt(localStorage.maxSerial || "0"),
);

gwtOnLoad();
