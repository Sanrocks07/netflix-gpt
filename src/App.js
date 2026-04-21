import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body>
        <Login />
        <Browse />
      </Body>
    </Provider>
  );
}

export default App;
