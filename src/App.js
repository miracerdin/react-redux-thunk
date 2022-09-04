import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { setCurrentUser } from "./redux/actions/authActions";
import AppRouter from "./router/Router";
import { auth } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });
    return userInfo; // clean-up function
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
