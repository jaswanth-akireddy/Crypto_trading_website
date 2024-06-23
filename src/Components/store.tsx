import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const CHANGE_SLIDER = "CHANGE_SLIDER";
const MODIFY_DELIVERYFEE = "MODIFY_DELIVERYFEE";

export function changeSlider(value: string) {
  return {
    type: CHANGE_SLIDER,
    value: value,
  };
}

export function updateDeliveryFee(value: string){
  return{
    type: MODIFY_DELIVERYFEE,
    value: value,
  }
}

const initialState = {
  SliderValue: "2.34510",
  DeliveryFee: "0.001 BTC"
};

const logger = createLogger();

interface Action {
  type: string,
  value: string;
}


const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_SLIDER:
      return {
        ...state,
        SliderValue: action.value,
      };
    case MODIFY_DELIVERYFEE:
      return{
        ...state,
        DeliveryFee: action.value,
      }
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));
console.log("initial state", store.getState());
store.subscribe(() => {});
// store.dispatch(changeSlider(20))

export default store;
