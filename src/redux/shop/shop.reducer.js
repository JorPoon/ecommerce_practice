import SHOP_DATA from "./Shop.data.js"


const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        default:
           return state;
    }
} 

export default shopReducer