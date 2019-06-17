const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "ADD_COUNTER":
      return { ...state, counter: state.counter + action.value };
    default: {
      return state;
    }
  }
};

const store = createStore(storeReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log("[Sub]", store.getState());
});

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });

console.log(store.getState());
