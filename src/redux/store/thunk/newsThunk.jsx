//Thunk dispatchden gelen objeyi Plain object şekline dönüştürüyor.

import { setLoading, clearLoading } from "../../actions/appActions";
import axios from "axios";
import { setNewsList } from "../../actions/newsActions";
const url =
  "https://newsapi.org/v2/everything?q=apple&from=2022-09-03&sortBy=popularity&apiKey=04c4a30ac54643cb9d41833956cb3421";

// Bu kullanımda getNew bir değişken gibi düşünülebilir. Dolayısıyla view tarafında dispatch(getNews) şeklinde yazılır.
const getNews = async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(url);
    dispatch(setNewsList(data.articles));
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearLoading());
  }
};

export default getNews;
