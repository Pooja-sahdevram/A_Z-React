import Currencyconvertor from "./components/Currencyconvertor";
import Passwordgenerator from "./components/Passwordgenerator";
import TICtactoe from "./components/TICtactoe";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import { store } from "./components/themechanger/storetheme/store";
import Todos from "./components/rtkcompoenents/Todos";
import Form from "./components/rtkcompoenents/Form";
import Themechanger from "./components/themechanger/Themechanger";

function App() {
  return (
    <Provider store={store}>
      <Themechanger />
    </Provider>
  );
}

export default App;
