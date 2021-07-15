// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (payload) => {
  return { type: "quotes/add", payload: payload };
};

export const removeQuote = (id) => {
  return { type: "quotes/add", payload: id };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch(action.type) {
    case "quotes/add":
      return [...state, action.payload] // action payload is gonna be the object of the quote
    
    case "quotes/remove":
      return state.filter(quote => quote.id !== action.payload);
    
    default:
      return state;
  }
 
}
