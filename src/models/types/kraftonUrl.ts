import { ActionMap } from "../utils/actionMap";
import { kraftonType } from "./kraftonType";

export type kraftonUrl =
  ActionMap<kraftonType>[keyof ActionMap<kraftonType>];