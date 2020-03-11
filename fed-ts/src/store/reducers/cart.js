import { ADD_ITEM, addItem } from "../actions/cart";

let initialState = [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }];
export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        default:
            return state
    }
}