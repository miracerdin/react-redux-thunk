import { SET_NEWS_LIST, CLEAR_NEWS_LIST } from "../types/newTypes";
const initialState = {
  newsList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEWS_LIST:
      return { ...state, newsList: payload };

    case CLEAR_NEWS_LIST:
      return initialState.newsList;
    default:
      return state;
  }
};
