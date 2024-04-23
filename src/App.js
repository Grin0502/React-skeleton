import "./App.css";
import { Provider } from "react-redux";

import store from "./redux/store";
import ClientVIew from "./view/client";

function App() {
  return (
    <Provider store={store}>
      <ClientVIew />
    </Provider>
  );
}

export default App;
