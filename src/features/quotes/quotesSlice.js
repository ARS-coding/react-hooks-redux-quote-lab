// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (payload) => {
  return { type: "quotes/add", payload: payload };
};

export const removeQuote = (id) => {
  return { type: "quotes/remove", payload: id }; // payload is the removed quote's id
};


export const upvoteQuote = (id) => {
  return { type: "quotes/upvote", payload: id }; // payload is the upvoted quote's id
};

export const downvoteQuote = (id) => {
  return { type: "quotes/downvote", payload: id }; // payload is the downvoted quote's id
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  let copyOfTheState = state; // copy the state
  switch(action.type) {
    case "quotes/add":
      return [...state, action.payload] // action payload is gonna be the object of the quote
    
    case "quotes/remove":
      return state.filter(quote => quote.id !== action.payload);

    case "quotes/upvote":
      return state.map(quoteObj => quoteObj.id === action.payload ? { ...quoteObj, upvotes: quoteObj.upvotes + 1 } : quoteObj);

    case "quotes/downvote": 
      return state.map(quoteObj => quoteObj.id === action.payload ? { ...quoteObj, downvotes: quoteObj.downvotes + 1 } : quoteObj);

    default:
      return state;
  }
 
}
