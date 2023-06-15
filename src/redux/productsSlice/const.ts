import products from "../../assets/items.json";
import { Item } from "./types";

export const INITIAL_STATE = {
  list: products as Item[],
};
