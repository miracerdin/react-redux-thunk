import { SET_NEWS_LIST, CLEAR_NEWS_LIST } from "../types/newTypes";

export const setNewsList = (payload) => ({
  type: SET_NEWS_LIST,
  payload: payload,
});

export const clearNewsList = (payload) => ({
  type: CLEAR_NEWS_LIST,
  payload: payload,
});
