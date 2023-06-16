import { CartItem } from "../../types/cartItem";

type State = {
  items: CartItem[];
};

export const INITIAL_STATE: State = {
  items: [],
};
