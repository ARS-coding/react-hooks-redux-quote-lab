// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (payload) => {
  return { type: "quotes/add", payload: payload }; // the object is passed to add to the state
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
  switch(action.type) {
    case "quotes/add":
      return [...state, action.payload] // action payload is gonna be the object of the quote
    
    case "quotes/remove":
      return state.filter(quoteObj => quoteObj.id !== action.payload);

    case "quotes/upvote":
      return state.map(quoteObj => quoteObj.id === action.payload ? { ...quoteObj, votes: quoteObj.votes +=1 } : quoteObj);

    case "quotes/downvote":
      const downvotedQuote = state.find(quoteObj => quoteObj.id === action.payload)
      if (downvotedQuote.votes === 0) return state;
      return state.map(quoteObj => quoteObj.id === action.payload ? { ...quoteObj, votes: quoteObj.votes -= 1 } : quoteObj);

    default:
      return state;
  }
 
}
