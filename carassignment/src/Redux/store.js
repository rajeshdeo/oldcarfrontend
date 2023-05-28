import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import { dealerReducer } from "./DealerAuth/dealer.reducer"
import { dealerInventoryReducer } from "./DealerInventory/dealer_inventory.reducer"
import { marketplaceReducer } from "./MarketPlace/marketplace.reducer"
import { oemReducer } from "./OEM/oem.reducer"

const mainReducer=combineReducers({
    oemReducer,
    marketplaceReducer,
    dealerReducer,
    dealerInventoryReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store=legacy_createStore(mainReducer,composeEnhancer(applyMiddleware(thunk)))