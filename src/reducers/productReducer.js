// const initialState = {
//   showProduct: false,
// };
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "TOGGLE_PRODUCT":
//       return { ...state, showProduct: !state.showProduct };
//     default:
//       return state;
//   }
// }
import { TOGGLE_PRODUCT } from "../actions/AuthActions";

const initialState = {
  showProduct: false,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PRODUCT:
      return { ...state, showProduct: !state.showProduct };
    default:
      return state;
  }
}

export default productReducer;
