//Thunk dispatchden gelen objeyi Plain object şekline dönüştürüyor.

import { setLoading, clearLoading } from "../../actions/appActions";
import axios from "axios";
import { setNewsList } from "../../actions/newsActions";
const url = "https://jsonplaceholder.typicode.com/posts";

// Bu kullanımda getNew bir değişken gibi düşünülebilir. Dolayısıyla view tarafında dispatch(getNews) şeklinde yazılır.
const getNews = async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(url);
    dispatch(setNewsList(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearLoading());
  }
};

export default getNews;
