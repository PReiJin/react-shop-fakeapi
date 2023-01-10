import { ReactNode, createContext, useReducer } from 'react';
import { Product } from './ProductContext';
export interface CartItem extends Product {
	amount: number;
}
interface CartContextProps {
	cartItems: CartItem[];
	dispatchCart: any;
}
const initState: CartContextProps = {
	cartItems: [],
	dispatchCart: null,
};
export const CartContext = createContext<CartContextProps>(initState);
interface Action {
	type: string;
	payload: any;
}
export const CART_ACTION = {
	get_all: 'getAll',
	add_item: 'addItem',
	remove_item: 'removeItem',
	update_item: 'updateItem',
};
const cartReducer = (state: CartItem[], action: Action) => {
	switch (action.type) {
		case CART_ACTION.get_all:
			return state;
		case CART_ACTION.add_item: {
			let isExist = false;
			const payload = action.payload;
			let newState = state.map((i: CartItem) => {
				if (i.id == payload?.id) {
					const amount = payload?.amount || 1;
					i.amount += amount;
					isExist = true;
				}
				return i;
			});
			if (!isExist) {
				const newItem: CartItem = { ...payload, amount: 1 };
				newState = [...newState, newItem];
			}
			return newState;
		}
		case CART_ACTION.remove_item: {
			const removedState: CartItem[] = state.map((i: CartItem) => {
				if (i.id == action.payload?.id) {
					const amount = action.payload?.amount || 1;
					i.amount -= amount;
				}
				return i;
			});
			const newState = removedState.filter((v: CartItem) => v.amount > 0);
			return newState;
		}
		case CART_ACTION.update_item: {
			const payload = action.payload;
			return state.map((i: CartItem) => {
				if (i.id == payload?.id && payload?.amount) {
					i.amount = payload?.amount;
				}
				return i;
			});
		}
		default:
			return [...state];
	}
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, dispatchCart] = useReducer(cartReducer, []);
	return (
		<CartContext.Provider value={{ cartItems, dispatchCart }}>
			{children}
		</CartContext.Provider>
	);
};
