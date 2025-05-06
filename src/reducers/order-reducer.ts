import { MenuItem } from "../types";

export type OrderAction = 
    { type: 'add-item', payload: { item: MenuItem} } |
    { type: 'remove-item', payload: { id: MenuItem['id']} } |
    { type: 'place-order' } |
    { type: 'set-tip', payload: { tip: number}}

export type OrderState = {
    order: MenuItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
        state: OrderState = initialState,
        action: OrderAction
    ) => {
    
    if(action.type === 'add-item') {
        return {
            ...state,
        }
    }
    
    if(action.type === 'remove-item') {
        return {
            ...state,
        }
    }
    
    if(action.type === 'set-tip') {
        return {
            ...state,
        }
    }
    return state;
}