import { Item } from "../../types/item";

type State = {
  items: Item[];
};

export const INITIAL_STATE: State = {
  items: [],
};
